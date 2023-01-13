import React, { useState } from 'react';
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, onClick }) => {
    return (
        <div className="flex md:flex-col flex-row overflow-y-auto h-auto md:h-[95%]">
            { 
                categories.map(({ name, icon }) => (
                    <button
                        key={ name }
                        onClick={ () => onClick(name) }
                        className={`category-btn 
                            ${ selectedCategory === name && 'bg-[#FC1503]'} 
                            text-white`}
                    >
                        <span className={`${ selectedCategory === name ? 'text-white' : 'text-red-500'} mr-4 text-lg`}>
                            { icon }
                        </span>
                        <span className={`${ selectedCategory === name ? 'opacity-100' : 'opacity-70'} text-sm`}>
                            { name }
                        </span>
                    </button>
                    )
                )
            } 
        </div>
    )
}

export default Sidebar;