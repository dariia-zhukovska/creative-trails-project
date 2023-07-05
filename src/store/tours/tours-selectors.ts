import { ITourListData } from "interfaces";
import { useGetAllToursQuery } from "./api";
import { createSelector } from "@reduxjs/toolkit";


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


export const selectedTour = (id: number | null) => (state: any) => state.tours.tours.find((tour: ITourListData) => tour.id === id);

export const toursIsLoading = (state: any) => state.tours.isLoading;
export const toursIsError = (state: any) => state.tours.isError;
export const toursIsErrorMessage = (state: any) => state.tours.errorMessage;



// selectors with rtk query


export const useSelectedTour = (id: number | null) => {
  const { data } = useGetAllToursQuery('');
  return data.tours.find((tour: ITourListData) => tour.id === id) || null;
};

