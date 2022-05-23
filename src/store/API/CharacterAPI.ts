import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const characterAPI = createApi({
    reducerPath: "characterAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api"
    }),
    tagTypes: ["Character"],
    endpoints: (build) => ({
        fetchAllCharacters: build.query({
            async queryFn (page: number = 1) {
                const result = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                    .then(res => res.json())
                    .then(res => res.results)
                console.log(result)
                return {data: [...result]}
            },
            providesTags: ["Character"]
        }),
        getNumberPages: build.query({
            async queryFn () {
                const result = await fetch(`https://rickandmortyapi.com/api/character`)
                    .then(res => res.json())
                    .then(res => res.pages)
                console.log(result)
                return {data: result}
            },
            providesTags: ["Character"]
        })
    })
})

export const {
    useFetchAllCharactersQuery,
    useGetNumberPagesQuery
} = characterAPI
