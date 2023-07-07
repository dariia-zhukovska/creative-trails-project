import { createSlice } from "@reduxjs/toolkit";
import { IViewState } from "interfaces/store";

const initialState: IViewState = {
  view: 'isGrid'
}

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    }
  }
})

export const { setView } = viewSlice.actions;

export const selectView = (state: any) => state.view.view;