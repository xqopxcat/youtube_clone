import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetChannelDetailsQuery, useGetChannelVideoQuery } from "../redux/services/youtubeCore";

import { Videos, ChannelCard, Loader } from './';

const ChannelDetail = () => {
    const { id } = useParams();

    const { data: channelDetail, isFetching } = useGetChannelDetailsQuery({ id });
    const { data: channelVideos, isFetching: videoFetching } = useGetChannelVideoQuery({ id });
    
    if (isFetching || videoFetching) return <Loader />;
    return (
        <div className="flex xs:flex-col flex-row items-center justify-center">
            <img
                className="w-full h-64 object-cover"
                src={ channelDetail?.items[0].brandingSettings?.image?.bannerExternalUrl } 
                alt={ channelDetail?.items[0].brandingSettings?.channel?.title } 
            />
            <ChannelCard channelDetail={ channelDetail?.items[0] } cardClass="mt-[-95px] !opacity-100" />
            <div className="h-[94vh] overflow-y-auto mt-4">
                <Videos videos={ channelVideos?.items } />
            </div>
        </div>
    )
}

export default ChannelDetail