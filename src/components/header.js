import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>Employee Directory</h1>
            <div>
                <input></input>
                <Link to='/' >All</Link>
                <Link to='/sort' >Sort</Link>
                <Link to='/filter' >Filter</Link>
            </div>
        </div>
    );
}

export default Header;