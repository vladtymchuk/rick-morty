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
                    // .then(res => res)
                console.log(result)
                return {data: result}
            },
            providesTags: ["Episode"]
        })
    })
})

export const {
    useFetchEpisodeQuery
} = episodeApi
