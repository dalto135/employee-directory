import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='header'>
            {/* <h1>Employee Directory</h1> */}
            <Link to='/'>Employee Directory</Link>
            <div>
                <input></input>
                <Link to='/'>List</Link>
                <Link to='/sort'>Sort</Link>
                <Link to='/filter'>Filter</Link>
            </div>
        </div>
    );
}

export default Header;