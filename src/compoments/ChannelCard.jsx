import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import {
    demoThumbnailUrl,
    demoChannelUrl,
    demoChannelTitle,
} from '../utils/constants';

const ChannelCard = ({ channelDetail: { id : { channelId }, snippet, statistics }, cardClass }) => {
    return (
        <div className={`card channel md:w-[300px] xs:w-[100%] ${cardClass}`}>
            <Link to={ channelId ? `/channel/${ channelId }` : demoChannelUrl }>
                <img 
                    className="card-media  w-[358px] h-[180px]"
                    src={ snippet?.thumbnails?.high?.url || demoThumbnailUrl } 
                    alt={ snippet?.title }
                />
                <h6 className="font-bold text-sm my-2">
                    { snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60) }
                    <MdCheckCircle className="text-xs text-gray-400 ml-1 inline-block"/>
                </h6>
                {
                    statistics && (
                        <h6 className="font-medium text-xs text-gray-400 my-2">
                            { `${ millify(statistics?.subscriberCount) } Subscribers`}
                        </h6>
                    )
                }
            </Link>
        </div>
    );
}

export default ChannelCard;