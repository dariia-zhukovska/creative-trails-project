import { ITourListData } from "types";

export const GET_TOURS = '@@tours/GET_TOURS';
export const ADD_TOUR = '@@tours/ADD_TOUR';
export const DELETE_TOUR = '@@tours/DELETE_TOUR';
export const EDIT_TOUR = '@@tours/EDIT_TOUR';

export enum ToursActionTypes {
  GET_TOURS = '@@tours/GET_TOURS',
  ADD_TOUR = '@@tours/ADD_TOUR',
  DELETE_TOUR = '@@tours/DELETE_TOUR',
  EDIT_TOUR = '@@tours/EDIT_TOUR'
}

export interface SetToursAction {
  type: ToursActionTypes.GET_TOURS;
  payload?: any;
}

export interface AddTourAction {
  type: ToursActionTypes.ADD_TOUR;
  payload?: any;
}

interface DeleteTourAction {
  type: ToursActionTypes.DELETE_TOUR;
  payload: number;
}

interface EditTourAction {
  type: ToursActionTypes.EDIT_TOUR;
  payload: any;
}

export type ToursAction = SetToursAction | AddTourAction | DeleteTourAction | EditTourAction;

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
