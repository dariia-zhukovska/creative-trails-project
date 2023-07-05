import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITourListData } from 'interfaces';



const transformResponse = (response: ITourListData[]) => {
  return { tours: response, total_tours: response.length };
}

export const toursApi = createApi({
  reducerPath: 'tours',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Tours'],
  endpoints: (builder) => ({
    getAllTours: builder.query<any, string>({
      query: (query) => `/tours?title_like=${query || ""}`,
      transformResponse,
      providesTags: ['Tours']
    }),
    addTour: builder.mutation<any, ITourListData>({
      query: (newTourData) => ({
        url: '/tours',
        method: 'POST',
        body: newTourData
      }),
      invalidatesTags: ['Tours']
    }),
    editTour: builder.mutation<any, { tourItemId: number; updatedTourData: ITourListData }>({
      query: ({ tourItemId, updatedTourData }) => ({
        url: `/tours/${tourItemId}`,
        method: 'PUT',
        body: updatedTourData
      }),
      invalidatesTags: ['Tours']
    }),
    deleteTour: builder.mutation<any, number>({
      query: (tourItemId) => ({
        url: `/tours/${tourItemId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Tours']
    })
  })
})


export const { useGetAllToursQuery, useAddTourMutation, useEditTourMutation, useDeleteTourMutation } = toursApi;
