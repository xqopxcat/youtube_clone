import React, { useState } from 'react';
import { useGetSearchVideoQuery } from "../redux/services/youtubeCore";
import { Sidebar, Videos, Loader } from './';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const { data, isFetching } = useGetSearchVideoQuery({ q: selectedCategory });
    const handleSidebarClick = (item) => {
        setSelectedCategory(item);
    };
    
    return (
        <div className="flex md:flex-row flex-col">
            <div className="md:h-[94vh] h-auto border-r border-solid border-r-[#3d3d3d] px-4">
                <Sidebar 
                    selectedCategory={ selectedCategory }
                    onClick={ handleSidebarClick }
                />
                <p className="copyright mt-3 text-white">
                    Copyright 2023 Steve Lee
                </p>
            </div>
            <div className="p-4 overflow-y-auto h-[94vh] flex-[2_1_0%]">
                <h4 className="text-2xl font-bold mb-4 text-white">
                    { selectedCategory } <span className="text-[#f31503]">
                        videos
                    </span>
                </h4>
                {
                    isFetching ? <Loader /> : <Videos videos={ data?.items }/>
                }
            </div>
        </div>
    )
}

export default Feed;