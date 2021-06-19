import React from 'react';
import { Link } from 'react-router-dom';
// import '../../src/reset.css';

function Header() {
    return (
        <div id='header'>
            {/* <h1>Employee Directory</h1> */}
            <h1 id='title'>
                <Link to='/'>Employee Directory</Link>
            </h1>
            
            <div id='links'>
                {/* <input></input> */}
                <Link to='/'>List</Link>
                <Link to='/sort'>Sort</Link>
                <Link to='/filter'>Filter</Link>
            </div>
        </div>
    );
}

export default Header;