import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='header'>
            <h1 id='title'>
                <Link to='/'>Employee Directory</Link>
            </h1>
            
            <div id='links'>
                <Link to='/'>View Employees</Link>
                <Link to='/sort'>View Sorted</Link>
                <Link to='/filter'>View Filtered</Link>
            </div>
        </div>
    );
}

export default Header;