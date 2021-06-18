import React, { useEffect, useState } from 'react';
import API from '../utils/API';

function List() {
    // const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);


    useEffect(() => {
        API.getList()
            .then(res => {
                setResults( JSON.stringify(res.data.results));
                // setResults(res.data.results);

                for(let i = 0; i < res.data.results.length; i++) {
                    let j = i + 1;
                    let items = res.data.results[i];

                    console.log(j + '.');
                    console.log('Name: ' + items.name.first + ' ' + items.name.last);
                    console.log('Location: ' + items.location.city + ', ' + items.location.country);
                    console.log('Email: ' + items.email);
                    console.log('');
                }

                console.log(res.data.results);
            })            
            .catch(err => console.log(err.message));
    }, [])


    //search feature(?)
    // const searchGiphy = query => {
    //     API.search(query)
    //         .then(res => setResults({ results: res.data.data}))
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err.message));
    // }

    // const handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchGiphy(this.state.search);
    // }

    return (
        
        <div>
            <h1>List</h1>
            {/* <p>{results[0].email}</p> */}
            <p>{results}</p>
        </div>
        
    );
}

export default List;