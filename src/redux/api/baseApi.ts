import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_API_BASE_URL as string;

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books"
        }),
        getSingleBook: builder.query({
            query: (_id: string) => `/books/${_id}`
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            })
        }),
    })
});


export const { useGetBooksQuery, useCreateBookMutation, useGetSingleBookQuery } = baseApi;