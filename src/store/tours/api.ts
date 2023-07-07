import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITourListData } from 'interfaces';
import { createSelector } from "@reduxjs/toolkit";


const transformResponse = (response: ITourListData[]) => {
  return { tours: response, total_tours: response.length };
}

export const toursApi = createApi({
  reducerPath: 'tours',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Tours'],
  endpoints: (builder) => ({
    getAllTours: builder.query<any, string>({
      query: (searchQuery) => `/tours?title_like=${searchQuery || ""}`,
      transformResponse,
      providesTags: ['Tours']
    }),
    getSpecificTour: builder.query<ITourListData, any>({
      query: (tourItemId) => `/tours/${tourItemId}`,
      providesTags: ['Tours'],
    }),
    addTour: builder.mutation<void, ITourListData>({
      query: (newTourData) => ({
        url: '/tours',
        method: 'POST',
        body: newTourData
      }),
      invalidatesTags: ['Tours']
    }),
    editTour: builder.mutation<void, { tourItemId: number; updatedTourData: ITourListData }>({
      query: ({ tourItemId, updatedTourData }) => ({
        url: `/tours/${tourItemId}`,
        method: 'PUT',
        body: updatedTourData
      }),
      invalidatesTags: ['Tours']
    }),
    deleteTour: builder.mutation<void, number | string | undefined>({
      query: (tourItemId) => ({
        url: `/tours/${tourItemId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Tours']
    })
  })
})


export const selectToursResult = toursApi.endpoints.getAllTours.select('');

export const selectTours = createSelector(
  selectToursResult,
  (toursResult) => toursResult?.data?.tours ?? []
)

export const selectToursById = createSelector(
  selectTours,
  (_, tourId) => tourId,
  (tours: any, tourId) => tours.find((tour: ITourListData) => tour.id === tourId)

)

export const { useGetAllToursQuery, useGetSpecificTourQuery, useAddTourMutation, useEditTourMutation, useDeleteTourMutation } = toursApi;
