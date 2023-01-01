import { useDispatch, useSelector } from "react-redux";
import { addEvent, setActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((store) => store?.calendar);
  const dispatch = useDispatch();

  const activateEvent = (event) => {
    dispatch(setActiveEvent(event));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent?.id) {
      dispatch(addEvent({ ...calendarEvent, _id: new Date().getTime() }));
    } else {
      dispatch(addEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    events,
    activeEvent,
    activateEvent,
    startSavingEvent,
  };
};
