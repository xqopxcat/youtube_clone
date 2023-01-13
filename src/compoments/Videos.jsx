import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
    return (
        <div className={`flex flex-${ direction || 'row' } flex-wrap justify-center gap-2`}>
            { 
                videos.map((item, idx) => {
                    return (
                        <div  className="flex flex-col items-center justify-center" key={ idx }>
                            { item.id.videoId && <VideoCard video={ item } /> }
                            { item.id.channelId && <ChannelCard channelDetail={ item } /> }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Videos;