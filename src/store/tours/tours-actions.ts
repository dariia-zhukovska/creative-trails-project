import { ITourListData } from "types";
import { ToursActionTypes } from './tours-actions-types'


export const fetchTours = (query: string) => ({
  type: ToursActionTypes.GET_TOURS,
  payload: query
});

export const addTour = (tour: ITourListData) => ({
  type: ToursActionTypes.ADD_TOUR,
  payload: tour,
});

export const deleteTour = (id: number) => ({
  type: ToursActionTypes.DELETE_TOUR,
  payload: id,
});

export const editTour = (tour: ITourListData) => ({
  type: ToursActionTypes.EDIT_TOUR,
  payload: tour,
});
