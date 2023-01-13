import React, { useState } from 'react';
import millify from 'millify';
import { format, formatDistance } from 'date-fns';
import { useParams } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { useGetVideoDetailsQuery, useGetSuggestedVideoQuery } from '../redux/services/youtubeCore';
import { Loader, Videos } from "./";
import Linkify from 'react-linkify';



const VideoDetail = () => {
    const { id } = useParams();
    const [showInfo, setShowInfo] = useState(false)
    const { data, isFetching } = useGetVideoDetailsQuery({ id });
    const { data: suggestedData, isFetching: isSuggestedFetching } = useGetSuggestedVideoQuery({ id });
    if (isFetching || isSuggestedFetching) return <Loader />;
    
    const { id: videoId, snippet, statistics } = data.items[0];
    return (
        <div className="min-h-[98vh] mt-8">
            <div className="flex xs:flex-col md:flex-row">
                <div className="flex-1">
                    <div className="w-full sticky top-20 h-[95vh] overflow-y-auto">
                        <iframe
                            className="video-player"
                            src={`https://www.youtube.com/embed/${videoId}`}
                        />
                        <div className="m-6">
                            <h5 className="text-white font-bold text-xl">
                                { snippet?.title }
                            </h5>
                            <div className="flex justify-between border-b border-solid border-b-[#3d3d3d] py-4">
                                <h6 className="font-bold text-gray-400 text-base">
                                    { snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60) }
                                    <MdCheckCircle className="text-xs ml-1 inline-block"/>
                                </h6>
                                <h6 className="font-bold text-gray-400 text-base px-4">
                                    { millify(statistics?.viewCount) } views
                                </h6>
                            </div>
                            <div 
                                className={`text-white hover:bg-gray-500/40 bg-gray-500/30 my-6 rounded-xl p-4 ${ showInfo ? '' : 'cursor-pointer' }`} 
                            >
                                <div className="text-white opacity-100" onClick={ () => { setShowInfo(true) } }>
                                    <div className="flex">
                                        { showInfo ? statistics?.likeCount : millify(statistics?.likeCount) } likes
                                        <p className="ml-2">
                                            { showInfo ? format(new Date(snippet?.publishedAt), 'yyyy/MM/dd') : formatDistance(new Date(snippet?.publishedAt), new Date(), { addSuffix: true }) }
                                        </p>
                                    </div>
                                    <p className={`max-w-7xl ${ showInfo ? 'whitespace-pre-wrap' : 'overflow-hidden whitespace-nowrap text-ellipsis' }`}>
                                        <Linkify 
                                            componentDecorator={(decoratedHref, decoratedText, key) => (
                                                <a 
                                                    className="underline text-[#3ea6ff] decoration-blue-500 hover:decoration-inherit" 
                                                    target="blank" 
                                                    href={ decoratedHref } 
                                                    key={ key }
                                                >
                                                    { decoratedText }
                                                </a>
                                            )}>
                                            { snippet?.description }
                                        </Linkify>
                                    </p>
                                </div>
                                <p className="mt-2 ml-2 cursor-pointer" onClick={ () => { setShowInfo(!showInfo) } }>{ showInfo ? 'Show less' : 'Show more' }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[100vh] overflow-y-auto flex justify-center items-center px-4 md:py-1 xs:py-5">
                    <Videos videos={ suggestedData?.items } direction="col" />
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;