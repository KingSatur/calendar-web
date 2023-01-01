import { configureStore } from "@reduxjs/toolkit";
import { UiSlice } from "./ui/uiSlice";
import { CalendarSlice } from "./calendar/calendarSlice";

export const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    calendar: CalendarSlice.reducer,
  },
});
