import { ITourListData } from "types";

export const selectAllTours = (state: any) => state.tours;

export const selectVisibleTours = (state: any, { search = '', title = '' }) => {
  return state.tours.filter((tour: ITourListData) =>
    tour.title.toLowerCase().includes(search.toLowerCase())
  );
};




