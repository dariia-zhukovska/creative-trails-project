import { ITourListData } from 'types';
import { ADD_TOUR, DELETE_TOUR, EDIT_TOUR, GET_TOURS } from './tours-actions-types'
import { createAction } from "@reduxjs/toolkit";


// export const fetchTours = (query: string) => ({
//   type: GET_TOURS,
//   payload: query
// });


// export const addTour = (tour: ITourListData) => ({
//   type: ADD_TOUR,
//   payload: tour,
// });

// export const deleteTour = (id: number) => ({
//   type: DELETE_TOUR,
//   payload: id,
// });

// export const editTour = (tour: ITourListData) => ({
//   type: EDIT_TOUR,
//   payload: tour,
// });



export const fetchTours = createAction(GET_TOURS, (payload: string) => ({ payload }));
export const addTour = createAction(ADD_TOUR, (payload: ITourListData) => ({ payload }));
export const deleteTour = createAction(DELETE_TOUR, (payload) => ({ payload }));
export const editTour = createAction(EDIT_TOUR, (payload) => ({ payload }));







