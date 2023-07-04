import { createReducer } from "@reduxjs/toolkit";
import { SET_VIEW, SetViewAction } from "./view-actions-types";
import { IViewState } from "interfaces/storeStates";

const initialState: IViewState = {
  view: 'isGrid',
}

export const viewReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_VIEW, (state, { payload }: SetViewAction) => {
    state.view = payload;
  })
})

