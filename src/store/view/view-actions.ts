import { createAction } from "@reduxjs/toolkit";
import { SET_VIEW } from "./view-actions-types";

export const setView = createAction(SET_VIEW, (payload) => ({ payload }))