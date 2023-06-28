import { ADD_TOUR, DELETE_TOUR, GET_TOURS, EDIT_TOUR, ToursAction } from './tours-actions';
import toursData from '../../data/tours.json'
import { ITourListData } from '../../types'

const initialState = {
  total_tours: toursData.tours.length,
  tours: toursData.tours,
}
export const toursReducer = (
  state = initialState,
  { type, payload }: ToursAction
) => {
  let data;
  let newTours;

  switch (type) {
    case GET_TOURS:
      data = [...state.tours];
      return {
        ...state,
        total_tours: data.length,
        tours: data
      };
    case ADD_TOUR:
      newTours = [...state.tours, payload];
      return {
        ...state,
        total_tours: newTours.length,
        tours: newTours,
      };
    case DELETE_TOUR:
      newTours = state.tours.filter((tour: ITourListData) => tour.id !== payload);
      return {
        ...state,
        total_tours: newTours.length,
        tours: newTours,
      };
    case EDIT_TOUR:
      newTours = state.tours.map((tour: ITourListData) =>
        tour.id === payload.id ? payload : tour
      );
      return {
        ...state,
        tours: newTours,
      };
    default:
      return state;
  }
};