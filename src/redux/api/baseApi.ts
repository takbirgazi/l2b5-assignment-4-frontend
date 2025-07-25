import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_API_BASE_URL as string;

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["books", "borrow"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["books"]
        }),
        getSingleBook: builder.query({
            query: (_id: string) => `/books/${_id}`,
            providesTags: ["books"]
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books"]
        }),
        deleteBook: builder.mutation({
            query: (_id) => ({
                url: `/books/${_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["books", "borrow"]
        }),
        editBook: builder.mutation({
            query: ({ _id, bookData }) => ({
                url: `/books/${_id}`,
                method: "PUT",
                body: bookData
            }),
            invalidatesTags: ["books", "borrow"]
        }),
        getBorrows: builder.query({
            query: () => "/borrow",
            providesTags: ["borrow"]
        }),
        createBorrow: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData
            }),
            invalidatesTags: ["books", "borrow"]
        })
    })
});


export const {
    useGetBooksQuery,
    useCreateBookMutation,
    useGetSingleBookQuery,
    useDeleteBookMutation,
    useEditBookMutation,
    useGetBorrowsQuery,
    useCreateBorrowMutation
} = baseApi;