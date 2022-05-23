import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {ICharacter} from "../../models/ICharacter";

export const characterAPI = createApi({
    reducerPath: "characterAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api"
    }),
    tagTypes: ["Character"],
    endpoints: (build) => ({
        fetchAllCharacters: build.query({
            query: () => ({
                url: '/character'
            }),
        }),
        getInfoCharacter: build.query({
            async queryFn (id: number) {
                const result = await fetch("https://rickandmortyapi.com/api/character");
                console.log(result)
                return {data: result}
            }
        })
    })
})

export const {
    useFetchAllCharactersQuery,
    useGetInfoCharacterQuery
} = characterAPI
