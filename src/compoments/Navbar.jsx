import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { SearchBar } from './';

const Navbar = () => {
    return (
        <div className="flex flex-row items-center p-2 sticky bg-black top-0 justify-between z-10">
            <Link to="/" className="flex items-center">
                <img src={ logo } alt="logo" className="h-11" />
            </Link>
            <SearchBar />
        </div>
    )
}

export default Navbar