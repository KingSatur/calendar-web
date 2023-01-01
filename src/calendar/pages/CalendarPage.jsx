import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { localizer, getMessages } from "../../helpers";
import { CalendarEvent } from "../components/CalendarEvent";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore, useCalendarStore } from "../../hooks";
import { FabAddNew } from "../components/FabAddNew";

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const { openModal } = useUiStore();
  const { events, activateEvent } = useCalendarStore();
  const eventPropGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = () => {
    openModal();
  };

  const onSelect = (event) => {
    activateEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <NavBar />
      <CalendarModal />
      <Calendar
        defaultView={lastView}
        culture="en"
        messages={getMessages()}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        eventPropGetter={eventPropGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <FabAddNew />
    </>
  );
};
