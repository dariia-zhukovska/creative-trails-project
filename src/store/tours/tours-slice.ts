import { createSlice } from '@reduxjs/toolkit';
import toursData from '../../data/tours.json'
import { ITourListData } from 'types';

const initialState = {
  total_tours: toursData.tours.length,
  tours: toursData.tours,
}


export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    fetchTours: (state) => {
      const data = [...state.tours];
      state.total_tours = data.length;
      state.tours = data;
    },
    addTour: (state, action) => {
      state.tours.push(action.payload);
      state.total_tours = state.tours.length;
    },
    deleteTour: (state, action) => {
      state.tours = state.tours.filter(
        (tour: ITourListData) => tour.id !== action.payload
      );
      state.total_tours = state.tours.length;
    },
    editTour: (state, action) => {
      const index = state.tours.findIndex(
        (tour: ITourListData) => tour.id === action.payload.id
      );
      if (index !== -1) {
        state.tours[index] = action.payload;
      }
    },
  },
});

export const { fetchTours, addTour, deleteTour, editTour } = toursSlice.actions;



