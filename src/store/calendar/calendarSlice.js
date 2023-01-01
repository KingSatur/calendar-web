import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

export const CalendarSlice = createSlice({
  name: "Calendar",
  initialState: {
    events: [
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
    ],
    activeEvent: null,
  },
  reducers: {
    addEvent: (state, { payload }) => {
      return {
        ...state,
        events: [...state?.events, payload],
      };
    },
    updateEvent: (state /* action */) => {},
    setActiveEvent: (state, { payload }) => {
      return {
        ...state,
        activeEvent: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEvent, updateEvent, setActiveEvent } = CalendarSlice.actions;
