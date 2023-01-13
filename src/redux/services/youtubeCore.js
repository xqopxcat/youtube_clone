import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const youtubeCoreApi = createApi({
    reducerPath: 'youtubeCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_API_KEY);
            headers.set('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com');
            
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSearchVideo: builder.query({ query: ({ q }) => ({
            url: 'search',
            params: {
                part: 'snippet',
                type: 'video,channel',
                maxResults: '50',
                q
            }
        }) }),
        getSuggestedVideo: builder.query({ query: ({ id }) => ({
            url: 'search',
            params: {
                relatedToVideoId: id,
                part: 'snippet',
                type: 'video',
                maxResults: '50',
            }
        }) }),
        getVideoDetails: builder.query({ query: ({ id }) => ({
            url: 'videos',
            params: {
                id,
                part: 'snippet,statistics',
            }
        }) }),
        getChannelVideo: builder.query({ query: ({ id }) => ({
            url: 'search',
            params: {
                channelId: id,
                part: 'snippet',
                order: 'date',
                maxResults: '50',
            }
        }) }),
        getChannelDetails: builder.query({ query: ({ id }) => ({
            url: 'channels',
            params: {
                part: 'snippet,statistics',
                id
            }
        }) })
    })
});

export const {
    useGetSearchVideoQuery,
    useGetSuggestedVideoQuery,
    useGetVideoDetailsQuery,
    useGetChannelVideoQuery,
    useGetChannelDetailsQuery
} = youtubeCoreApi;