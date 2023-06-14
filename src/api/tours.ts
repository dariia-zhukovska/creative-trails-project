import instance from "./config";
import { ITourListData } from "types";


export const deleteTour = async (tourItemId: number) => {
  try {
    const response = await instance.delete(`/tours/${tourItemId}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const addTour = async (newTourData: ITourListData) => {
  try {
    const response = await instance.post('/tours', newTourData);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const editTour = async (tourItemId: number, updatedTourData: ITourListData) => {
  try {
    const response = await instance.put(`/tours/${tourItemId}`, updatedTourData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};