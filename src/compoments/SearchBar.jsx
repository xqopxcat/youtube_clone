import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }
    
    return (
        <form
            className="rounded-[80px] border border-solid border-[#e3e3e3] pl-4 sm:mr-10 bg-white"
            onSubmit={ handleSubmit }
        >
            <input 
                className="search-bar"
                placeholder="Search..."
                value={ searchTerm }
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="p-2 hover:bg-slate-50 rounded-[80px]">
                <MdSearch className="text-red-500"/>
            </button>
        </form>
    )
}

export default SearchBar;