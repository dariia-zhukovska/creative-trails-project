import { createReducer } from "@reduxjs/toolkit";
import { SET_VIEW, SetViewAction } from "./view-actions-types";

const initialState = {
  view: 'isGrid',
}

export const viewReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_VIEW, (state, { payload }: SetViewAction) => {
    state.view = payload;
  })
})

