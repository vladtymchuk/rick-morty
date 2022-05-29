import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchAllEpisodes = createAsyncThunk(
    'episodes',
    async () => {
        return await fetch(`https://rickandmortyapi.com/api/episode`)
            .then(res => res.json())
            .then(res => res.results)
    }
)
