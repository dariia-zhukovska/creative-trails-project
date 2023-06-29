import { SetViewAction, ViewActionTypes } from "./view-actions-types";

const initialState = {
  view: 'isList',
}

export const viewReducer = (state = initialState, { type, payload }: SetViewAction) => {
  switch (type) {
    case ViewActionTypes.SET_VIEW:
      return payload;
    default:
      return state;
  }
};