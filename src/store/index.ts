

import { configureStore, createStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme/theme-slices';
import { viewSlice } from './view/view-slices';
import { toursSlice } from './tours/tours-slices'
import { toursApi } from './tours/api';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({

  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [viewSlice.name]: viewSlice.reducer,
    [toursSlice.name]: toursSlice.reducer,
    // [toursApi.reducerPath]: toursApi.reducer

  }
},
)


