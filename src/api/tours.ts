import instance from "./config";
import { ITourListData } from "types";

export const getTours = async (query?: string): Promise<ITourListData[]> => {
  try {
    const response = await instance.get(`/tours?title_like=${query || ''}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addTour = async (newTourData: ITourListData) => {
  try {
    const response = await instance.post('/tours', newTourData);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const editTour = async (tourItemId: number, updatedTourData: ITourListData) => {
  try {
    const response = await instance.put(`/tours/${tourItemId}`, updatedTourData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTour = async (tourItemId: number) => {
  try {
    const response = await instance.delete(`/tours/${tourItemId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};












