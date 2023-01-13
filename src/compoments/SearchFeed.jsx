import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSearchVideoQuery } from '../redux/services/youtubeCore';
import { Videos, Loader } from './';

const SearchFeed = () => {
    const { searchTerm } = useParams()
    
    const { data, isFetching } = useGetSearchVideoQuery({ q: searchTerm });
    
    
    if (isFetching) return <Loader />
    return (
        <div className="p-4 overflow-y-auto h-[94vh] flex-[2_1_0%]">
            <h4 className="text-2xl font-bold mb-4 text-white">
                Search Result for <span className="text-[#f31503]">
                    { searchTerm }
                </span> videos
            </h4>
            <Videos videos={ data?.items }/>
        </div>
    );
};

export default SearchFeed;