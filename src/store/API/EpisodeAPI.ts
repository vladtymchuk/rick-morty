import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const episodeApi = createApi({
    reducerPath: "episodeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api"
    }),
    tagTypes: ["Episode"],
    endpoints: (build) => ({
        fetchEpisode: build.query({
            async queryFn (link: string) {
                const result = await fetch(link)
                    .then(res => res.json())
                return {data: result}
            },
            providesTags: ["Episode"]
        }),
        fetchAllEpisodes: build.query({
            async queryFn (page: number = 1) {
                const result = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
                    .then(res => res.json())
                    .then(res => res.results)
                return {data: result}
            },
            providesTags: ["Episode"]
        })
    })
})

export const {
    useFetchEpisodeQuery,
    useFetchAllEpisodesQuery
} = episodeApi
