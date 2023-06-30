

import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme/theme-slice';
import { viewSlice } from './view/view-slice';
import { toursSlice } from './tours/tours-slice'





export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [viewSlice.name]: viewSlice.reducer,
    [toursSlice.name]: toursSlice.reducer,
  }
})

