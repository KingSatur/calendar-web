import React from "react";
import { NavBar } from "../components/NavBar";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { localizer, getMessages } from "../../helpers";

const events = [
  {
    title: "Meeting",
    notes: "Buy gift",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "fernan",
    },
  },
];

export const CalendarPage = () => {
  const eventPropGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    console.log({
      event,
      start,
      end,
      isSelected,
    });

    return {
      style,
    };
  };

  return (
    <>
      <NavBar />
      <Calendar
        culture="en"
        messages={getMessages()}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        eventPropGetter={eventPropGetter}
      />
    </>
  );
};
