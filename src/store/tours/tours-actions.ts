export const SET_TOURS = '@@tours/SET_TOURS';

export enum ToursActionTypes {
  SET_TOURS = '@@tours/SET_TOURS',
}

export interface SetToursAction {
  type: ToursActionTypes.SET_TOURS;
  payload: string;
}

export const fetchTours = (query: string) => ({
  type: ToursActionTypes.SET_TOURS,
  payload: query
})


