import { combineReducers } from "redux";

import { viewReducer } from "./view/view-reducers";
import { themeReducer } from "./theme/theme-reducers";
import { toursReducer } from "./tours/tours-reducer";

// const initialState = {
//   tours: {
//     totalItems: 0,
//     items: [],
//   }
// }

export const rootReducer = combineReducers({
  theme: themeReducer,
  view: viewReducer,
  tours: toursReducer,
});