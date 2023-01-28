import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../images/user.png'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const onChangeInput = (event) => {
        setInput(event.target.value)
    }
    const onSearch = () => {
        if (input === "") return alert("Please enter search term!");
        dispatch(fetchAsyncMovies(input))
        dispatch(fetchAsyncShows(input))
        setInput("")
    }

    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie App</div>
            </Link>
            <div className="search-container">
                <input type="search" placeholder='Search your movies or shows..' onChange={onChangeInput} value={input} />
                <button type="button" onClick={onSearch}>
                    <AiOutlineSearch style={{ width: 100 + '%', height: 100 + '%' }} />
                </button>
            </div>
            <div className='user-img'>
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;