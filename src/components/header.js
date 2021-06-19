import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='header'>
            <h1 id='title'>
                <Link to='/'>Employee Directory</Link>
            </h1>
            <div id='view'>
                <Link to='/'>View Employees</Link>
                <Link to='/sort'>View Sorted</Link>
            </div>
        </div>
    );
}

export default Header;