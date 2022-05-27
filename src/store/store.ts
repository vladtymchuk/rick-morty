import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {characterAPI} from "./API/CharacterAPI";
import {episodeApi} from "./API/EpisodeAPI";

const rootReducer = combineReducers({
    [characterAPI.reducerPath]: characterAPI.reducer,
    [episodeApi.reducerPath]: episodeApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .concat(characterAPI.middleware)
                .concat(episodeApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
