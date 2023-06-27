import { SET_TOURS, SetToursAction } from './tours-actions';
import toursData from '../../data/tours.json'
import { ITourListData } from '../../types'


const initialState = {
  total_tours: 0,
  tours: []
}


export const toursReducer = (state = initialState, { type }: SetToursAction) => {
  const data: ITourListData[] = [...toursData.tours]
  switch (type) {
    case SET_TOURS:

      return {
        ...state,
        total_tours: data.length,
        tours: data
      }
    default:
      return state;
  }
};

