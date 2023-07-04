import { ITourListData } from "interfaces";

export const GET_TOURS = '@@tours/GET_TOURS';
export const ADD_TOUR = '@@tours/ADD_TOUR';
export const DELETE_TOUR = '@@tours/DELETE_TOUR';
export const EDIT_TOUR = '@@tours/EDIT_TOUR';


export interface SetToursAction {
  type: typeof GET_TOURS;
  payload?: string;
}

export interface AddTourAction {
  type: typeof ADD_TOUR;
  payload: any;
}

export interface DeleteTourAction {
  type: typeof DELETE_TOUR;
  payload: number;
}

export interface EditTourAction {
  type: typeof EDIT_TOUR;
  payload: ITourListData;
}

export type ToursAction = SetToursAction | AddTourAction | DeleteTourAction | EditTourAction;