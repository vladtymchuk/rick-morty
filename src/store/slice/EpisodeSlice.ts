import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEpisode} from "../../models/IEpisode";

interface initialStateType {
    episodes: IEpisode[];
    isLoading: boolean;
    error: string | null
}

const initialState = {
    episodes: [] as IEpisode[],
    isLoading: false,
    error: null
}

const EpisodeSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        filterSearching: (state, action: PayloadAction<string>) => {
            state.episodes = state.episodes.filter(episode => episode.name.includes(action.payload))
        },
    }
})

export default EpisodeSlice.reducer