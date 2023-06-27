

import { SET_VIEW, SetViewAction } from "./view-actions";



const initialState = {
  view: 'isList',
}


export const viewReducer = (state = initialState, { type, payload }: SetViewAction) => {
  switch (type) {
    case SET_VIEW:
      return payload;
    default:
      return state;
  }
};