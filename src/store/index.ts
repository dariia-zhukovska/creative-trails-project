

import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme/theme-slices';
import { viewSlice } from './view/view-slices';
import { toursApi } from './tours/api';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({

  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [viewSlice.name]: viewSlice.reducer,
    [toursApi.reducerPath]: toursApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(toursApi.middleware)

},
)


