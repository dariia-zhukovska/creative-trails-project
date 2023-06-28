import { ITourListData } from "types";

export const selectAllTours = (state: any) => state.tours;
export const selectedTour = (id: number | null) => (state: any) => state.tours.tours.find((tour: ITourListData) => tour.id === id)



