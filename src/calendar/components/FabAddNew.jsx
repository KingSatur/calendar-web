import React from "react";
import "./FabAddNew.css";
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns";

export const FabAddNew = () => {
  const { openModal } = useUiStore();
  const { activateEvent } = useCalendarStore();

  return (
    <button
      onClick={() => {
        activateEvent({
          title: "",
          notes: "",
          start: new Date(),
          end: addHours(new Date(), 2),
        });
        openModal();
      }}
      className="btn btn-primary fab"
    >
      <i className="fas fa-plus"></i>
    </button>
  );
};
