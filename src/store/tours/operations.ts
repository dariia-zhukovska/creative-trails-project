// import { fetchToursFulfiled, fetchToursPending, fetchToursRejected, addTourPending, addTourFulfiled, addTourRejected, editTourPending, editTourFulfilled, editTourRejected, deleteTourPending, deleteTourFulfilled, deleteTourRejected, } from "./tours-slice";

import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { ITourListData } from "interfaces";
// import { Dispatch } from 'redux';



const instance = axios.create({
  baseURL: 'http://localhost:3001/'
});


// export const fetchToursThunk = () => async (dispatch: Dispatch,) => {
//   try {
//     dispatch(fetchToursPending())
// const {data} = await  instance.get(`/tours?title_like=${query || ""}`);
//     dispatch(fetchToursFulfiled(data))
//   } catch (error: any) {
//     dispatch(fetchToursRejected(error.message))
//   }
// }


// export const addTourThunk = (newTourData: ITourListData) => async (dispatch: Dispatch) => {
//   try {
//     dispatch(addTourPending());
//     const {data} = await instance.post('/tours', newTourData);
//     console.log(response);
//     dispatch(addTourFulfiled(data));
//     // fetchToursThunk(response.data)
//   } catch (error) {
//     dispatch(addTourRejected(error.message))
//   }
// }


// export const editTourThunk = (tourItemId: number, updatedTourData: ITourListData) => async (dispatch: Dispatch) => {
//   try {
//     dispatch(editTourPending());
//     const {data} = await instance.put(`/tours/${tourItemId}`, updatedTourData);
//     dispatch(editTourFulfilled(data));
//   } catch (error) {
//     dispatch(editTourRejected(error.message))
//   }
// }



// export const deleteTourThunk = (tourItemId: number) => async (dispatch: Dispatch) => {
//   try {
//     dispatch(deleteTourPending());
//     const { data } = await instance.delete(`/tours/${tourItemId}`);
//     dispatch(deleteTourFulfilled(data));
//   } catch (error) {
//     dispatch(deleteTourRejected(error.message))
//   }
// }



export const fetchToursThunk = createAsyncThunk('tours/fetchAllTors', async (query: string, thunkApi) => {
  try {
    const { data } = await instance.get(`/tours?title_like=${query || ""}`);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message)
  }
});

export const addTourThunk = createAsyncThunk('tours/addTour', async (newTourData: ITourListData, thunkApi) => {
  try {
    const { data } = await instance.post('/tours', newTourData);
    // const { data } = await instance.get('/tours');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message)
  }
});

export const editTourThunk = createAsyncThunk('tours/editTour', async ({ tourItemId, updatedTourData }: { tourItemId: number; updatedTourData: ITourListData }, thunkApi) => {
  try {
    const { data } = await instance.put(`/tours/${tourItemId}`, updatedTourData);
    // const { data } = await instance.get('/tours');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message)
  }
})


export const deleteTourThunk = createAsyncThunk('tours/deleteTour', async (tourItemId: number, thunkApi) => {
  try {
    const { data } = await instance.delete(`/tours/${tourItemId}`);
    // const { data } = await instance.get('/tours');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message)
  }
})


