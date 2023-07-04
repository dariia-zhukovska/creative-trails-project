import { ADD_TOUR, AddTourAction, DELETE_TOUR, DeleteTourAction, EDIT_TOUR, EditTourAction, GET_TOURS } from './tours-actions-types';
import toursData from '../../data/tours.json'
import { ITourListData } from '../../interfaces'
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  total_tours: toursData.tours.length,
  tours: toursData.tours,
}

export const toursReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_TOURS, (state) => {
      const data = [...state.tours];
      state.total_tours = data.length;
      state.tours = data;
    })
    .addCase(ADD_TOUR, (state, action: AddTourAction) => {
      state.tours.push(action.payload);
      state.total_tours = state.tours.length;
    })
    .addCase(DELETE_TOUR, (state, action: DeleteTourAction) => {
      state.tours = state.tours.filter(
        (tour: ITourListData) => tour.id !== action.payload
      );
      state.total_tours = state.tours.length;
    })
    .addCase(EDIT_TOUR, (state, action: EditTourAction) => {
      state.tours = state.tours.map((tour: ITourListData) =>
        tour.id === action.payload.id ? action.payload : tour
      );
    });
});



