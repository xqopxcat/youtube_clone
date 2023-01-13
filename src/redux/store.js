import { configureStore } from '@reduxjs/toolkit';
import { youtubeCoreApi } from './services/youtubeCore';

export const store = configureStore({
    reducer: {
        [youtubeCoreApi.reducerPath]: youtubeCoreApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(youtubeCoreApi.middleware),
});