import { createSlice } from "@reduxjs/toolkit";

export const UiSlice = createSlice({
  name: "Ui",
  initialState: {
    isCreateEventModalOpen: false,
  },
  reducers: {
    setIsCreateEventModalOpen: (state, { payload }) => {
      return {
        ...state,
        isCreateEventModalOpen: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsCreateEventModalOpen } = UiSlice.actions;
