import { ADD_TOUR, DELETE_TOUR, GET_TOURS, EDIT_TOUR, ToursAction } from './tours-actions';
import toursData from '../../data/tours.json'
import { ITourListData } from '../../types'

const initialState = {
  total_tours: 0,
  tours: []
}

export const toursReducer = (
  state = initialState,
  { type, payload }: ToursAction
) => {
  let data;
  let newTours;

  switch (type) {
    case GET_TOURS:
      data = toursData.tours.filter((tour) =>
        tour.title.toLowerCase().includes(payload.toLowerCase())
      );
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
      return {
        ...state,
        total_tours: state.total_tours - 1,
        tours: state.tours.filter((tour: ITourListData) => tour.id !== payload),
      };
    case EDIT_TOUR:
      return {
        ...state,
        tours: state.tours.map((tour: ITourListData) =>
          tour.id === payload.id ? payload : tour
        ),
      };
    default:
      return state;
  }
};