import { ToursAction, ToursActionTypes } from './tours-actions-types';
import toursData from '../../data/tours.json'
import { ITourListData } from '../../types'

// const initialState = {
//   total_tours: toursData.tours.length,
//   tours: toursData.tours,
// }

const initialState = {
  total_tours: 0,
  tours: [],
}

export const toursReducer = (
  state = initialState,
  { type, payload }: ToursAction
) => {
  let newTours;
  let data;

  switch (type) {
    case ToursActionTypes.GET_TOURS:
      data = toursData.tours.filter((tour: ITourListData) =>
        tour.title?.toLowerCase().includes(payload?.toLowerCase())
      )
      return {
        ...state,
        total_tours: data.length,
        tours: data
      };
    case ToursActionTypes.ADD_TOUR:
      newTours = [...state.tours, payload];
      return {
        ...state,
        total_tours: newTours.length,
        tours: newTours,
      };
    case ToursActionTypes.DELETE_TOUR:
      newTours = state.tours.filter((tour: ITourListData) => tour.id !== payload);
      return {
        total_tours: newTours.length,
        tours: newTours,
      };
    case ToursActionTypes.EDIT_TOUR:
      newTours = state.tours.map((tour: ITourListData) =>
        tour.id === payload.id ? payload : tour
      )
      return {
        ...state,
        tours: newTours,
      };
    default:
      return state;
  }
};