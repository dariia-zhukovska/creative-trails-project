import { createSlice } from '@reduxjs/toolkit';
import toursData from '../../../data/tours.json'
import { ITourListData } from 'interfaces';
import { ITourState } from 'interfaces/storeStates';
import { addTourThunk, deleteTourThunk, editTourThunk, fetchToursThunk } from './operations';

const initialState: ITourState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  total_tours: toursData.tours.length,
  tours: toursData.tours,
}

const pendingReducer = (state: any) => {
  state.isLoading = true;
}

const fulfilledReducer = (state: any, action: any) => {
  state.isLoading = false;
  state.isError = false;
  state.errorMessage = null;
  state.total_tours = action.payload.length;
}

const rejectedReducer = (state: any, action: any) => {
  state.isLoading = false;
  state.isError = true;
  state.errorMessage = action.payload;
}

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  // sync actions
  reducers: {
    // get tours
    fetchToursPending: pendingReducer,
    fetchToursFulfiled: (state, action) => {
      fulfilledReducer(state, action);
      state.tours = action.payload;
    },
    fetchToursRejected: rejectedReducer,


    // add tour
    addTourPending: pendingReducer,
    addTourFulfilled: (state, action) => {
      fulfilledReducer(state, action);
      state.tours.push(action.payload);
    },
    addTourRejected: rejectedReducer,



    // edit tour
    editTourPending: pendingReducer,
    editTourFulfilled: (state, action) => {
      const updatedTour = state.tours.map((tour: ITourListData) =>
        tour.id === action.payload.id ? action.payload : tour
      );
      state.tours = updatedTour;
    },
    editTourRejected: rejectedReducer,


    // delete tour
    deleteTourPending: pendingReducer,
    deleteTourFulfilled: (state, action) => {
      state.tours = state.tours.filter(
        (tour: ITourListData) => tour.id !== action.payload
      );
    },
    deleteTourRejected: rejectedReducer,


    // ------------------------------------------------------------------------
    fetchTours: (state) => {
      const data = [...state.tours];
      state.total_tours = data.length;
      state.tours = data;
    },
    addTour: (state, action) => {
      state.tours.push(action.payload);
      state.total_tours = state.tours.length;
    },
    editTour: (state, action) => {
      const updatedTour = state.tours.map((tour: ITourListData) =>
        tour.id === action.payload.id ? action.payload : tour
      );
      state.tours = updatedTour;
    },
    deleteTour: (state, action) => {
      state.tours = state.tours.filter(
        (tour: ITourListData) => tour.id !== action.payload
      );
      state.total_tours = state.tours.length;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToursThunk.pending, pendingReducer)
      .addCase(fetchToursThunk.fulfilled, (state, action) => {
        fulfilledReducer(state, action)
        state.tours = action.payload;
      })
      .addCase(fetchToursThunk.rejected, rejectedReducer)


      .addCase(addTourThunk.pending, pendingReducer)
      .addCase(addTourThunk.fulfilled, (state, action) => {
        fulfilledReducer(state, action)
        state.tours.push(action.payload);
      })
      .addCase(addTourThunk.rejected, rejectedReducer)


      .addCase(editTourThunk.pending, pendingReducer)
      .addCase(editTourThunk.fulfilled, (state, action) => {
        const updatedTour = state.tours.map((tour: ITourListData) =>
          tour.id === action.payload.id ? action.payload : tour
        );
        state.tours = updatedTour;
      })
      .addCase(editTourThunk.rejected, rejectedReducer)


      .addCase(deleteTourThunk.pending, pendingReducer)
      .addCase(deleteTourThunk.fulfilled, (state, action) => {
        fulfilledReducer(state, action);
        state.tours = state.tours.filter(
          (tour: ITourListData) => tour.id !== action.payload
        )
      })
      .addCase(deleteTourThunk.rejected, rejectedReducer)
  }
});

export const {
  fetchToursPending,
  fetchToursFulfiled,
  fetchToursRejected,
  addTourPending,
  addTourFulfilled,
  editTourRejected,
  editTourPending,
  editTourFulfilled,
  deleteTourRejected,
  deleteTourPending,
  deleteTourFulfilled,
  addTourRejected,
  fetchTours,
  addTour,
  deleteTour,
  editTour,
} = toursSlice.actions;



