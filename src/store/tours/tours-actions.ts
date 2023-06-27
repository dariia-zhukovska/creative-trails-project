import { ITourListData } from "types";

export const SET_TOURS = '@@tours/SET_TOURS';

export enum ToursActionTypes {
  SET_TOURS = '@@tours/SET_TOURS',
}

export interface SetToursAction {
  type: ToursActionTypes.SET_TOURS;
  payload?: any;
}


export const fechTours = () => ({
  type: ToursActionTypes.SET_TOURS,
  // payload: tours
})


