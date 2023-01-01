import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import "./CalendarModal.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInSeconds } from "date-fns";
import Swal from "sweetalert2";
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns/esm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
export const CalendarModal = () => {
  const { isCreateEventModalOpen, closeModal } = useUiStore();
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [form, setForm] = useState({
    startDate: activeEvent?.start || new Date(),
    endDate: activeEvent?.end || addHours(new Date(), 2),
    title: activeEvent?.title || "",
    notes: activeEvent?.notes || "",
  });

  useEffect(() => {
    if (activeEvent) {
      setForm({
        title: activeEvent?.title,
        notes: activeEvent?.notes,
        startDate: activeEvent?.start,
        endDate: activeEvent?.end,
      });
    }
  }, [activeEvent]);

  const titleClass = useMemo(() => {
    if (!isFormSubmitted) {
      return "";
    }
    return form?.title?.length > 0 ? "" : "is-invalid";
  }, [form?.title, isFormSubmitted]);

  const onInputChange = ({ target }) => {
    setForm({
      ...form,
      [target?.name]: target?.value,
    });
  };

  async function onSubmit(e) {
    e?.preventDefault();
    setIsFormSubmitted(true);
    const difference = differenceInSeconds(form?.endDate, form?.startDate);
    console.log(difference);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Invalid dates", "Check the dates, please", "error");
    }
    if (form?.title?.length <= 0) {
      Swal.fire("Invalid title", "Check the title, please", "error");
    }

    await startSavingEvent();
    closeModal();
    setIsFormSubmitted(false);
  }

  return (
    <Modal
      isOpen={isCreateEventModalOpen}
      onAfterOpen={() => {}}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            minDate={new Date()}
            selected={form?.startDate}
            className="form-control"
            onChange={(date) => setForm({ ...form, startDate: date })}
            dateFormat="Pp"
            showTimeSelect
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={form?.startDate}
            selected={form?.endDate}
            className="form-control"
            onChange={(date) => setForm({ ...form, endDate: date })}
            dateFormat="Pp"
            showTimeSelect
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            onChange={onInputChange}
            value={form?.title}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            onChange={onInputChange}
            value={form?.notes}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
