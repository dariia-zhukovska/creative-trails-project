import { combineReducers } from "redux";

import { viewReducer } from "./view/view-reducer";
import { themeReducer } from "./theme/theme-reducer";
import { toursReducer } from "./tours/tours-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  view: viewReducer,
  tours: toursReducer,
});