import { SetViewAction, ViewActionTypes } from "./view-actions-types";


export const setView = (view: string): SetViewAction => ({
  type: ViewActionTypes.SET_VIEW,
  payload: view
})