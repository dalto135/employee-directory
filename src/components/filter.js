import React, { useEffect, useState } from 'react';
import API from '../utils/API';

function Filter() {
    // const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);


    useEffect(() => {
        searchGiphy('hello');
    }, [])

    //search feature(?)
    const searchGiphy = query => {
        API.getFilter(query)
            .then(res => setResults(JSON.stringify(res.data.results)))
            .then(res => console.log(res.data.results))
            .catch(err => console.log(err.message));
    }


    return (
        <div>
            <h1>Filter</h1>
            <p>{results}</p>
        </div>
        
    );
}

export default Filter;