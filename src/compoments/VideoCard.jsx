import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { MdCheckCircle } from 'react-icons/md';
import HTMLReactParser from 'html-react-parser';
import {
    demoThumbnailUrl,
    demoChannelUrl,
    demoVideoUrl,
    demoChannelTitle,
    demoVideoTitle
} from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <div className="card xs:w-[100%] sm:w-[358px] md:w-[300px]">
            <Link to={ videoId ? `/video/${ videoId }` : demoVideoUrl }>
                <img 
                    className="card-media xs:w-[100%] sm:w-[358px] md:w-[358px] h-[180px]"
                    src={ snippet?.thumbnails?.high?.url || demoThumbnailUrl } 
                    alt={ snippet?.title }
                />
            </Link>
            <div className="card-content">
                <Link to={ videoId ? `/video/${ videoId }` : demoVideoUrl }>
                    <h6 className="title font-bold text-white text-base mb-1">
                        { HTMLReactParser(snippet?.title.slice(0, 60)) || demoVideoTitle.slice(0, 60) }
                    </h6>
                </Link>
                <Link to={ snippet?.channelId ? `/channel/${ snippet?.channelId }` : demoChannelUrl }>
                    <h6 className="font-semibold text-gray-400 text-sm mb-1">
                        { snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60) }
                        <MdCheckCircle className="text-xs ml-1 inline-block"/>
                    </h6>
                </Link>
                <h6 className="font-semibold text-gray-400 text-sm">
                    { formatDistance(new Date(snippet?.publishedAt), new Date(), { addSuffix: true }) }
                </h6>
            </div>
        </div>
    );
}

export default VideoCard;