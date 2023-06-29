import { ITourListData } from "types";

export enum ToursActionTypes {
  GET_TOURS = '@@tours/GET_TOURS',
  ADD_TOUR = '@@tours/ADD_TOUR',
  DELETE_TOUR = '@@tours/DELETE_TOUR',
  EDIT_TOUR = '@@tours/EDIT_TOUR'
}

export interface SetToursAction {
  type: ToursActionTypes.GET_TOURS;
  payload: string;
}

export interface AddTourAction {
  type: ToursActionTypes.ADD_TOUR;
  payload?: ITourListData;
}

interface DeleteTourAction {
  type: ToursActionTypes.DELETE_TOUR;
  payload: number;
}

interface EditTourAction {
  type: ToursActionTypes.EDIT_TOUR;
  payload: ITourListData;
}

export type ToursAction = SetToursAction | AddTourAction | DeleteTourAction | EditTourAction;