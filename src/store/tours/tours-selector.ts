import { ITourListData } from "types";

export const selectAllTours = (state: any) => state.tours;

export const selectVisibleTours = (state: any, payload: string) => {
  return state.tours.tours.filter((tour: ITourListData) =>
    tour.title?.toLowerCase().includes(payload?.toLowerCase())
  );
};
export const selectedTour = (id: number | null) => (state: any) => state.tours.tours.find((tour: ITourListData) => tour.id === id)



