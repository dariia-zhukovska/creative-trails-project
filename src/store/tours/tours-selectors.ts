import { ITourListData } from "types";

export const selectAllTours = (state: any) => state.tours;

export const selectVisibleTours = (payload: string) => (state: any) => {
  return state.tours.tours.filter((tour: ITourListData) =>
    tour.title?.toLowerCase().includes(payload?.toLowerCase())
  );
};

export const selectVisibleToursCount = (payload: string) => (state: any) => {
  return state.tours.tours.filter((tour: ITourListData) =>
    tour.title?.toLowerCase().includes(payload?.toLowerCase())
  ).length;
}
export const selectedTour = (id: number | null) => (state: any) => state.tours.tours.find((tour: ITourListData) => tour.id === id)
