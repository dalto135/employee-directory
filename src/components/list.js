// import React, { useEffect, useState } from 'react';
// import API from '../utils/API';
import React from 'react';

function List({results}) {
    // const [results, setResults] = useState([]);


    // useEffect(() => {
    //     API.getList()
    //         .then(res => {
    //             setResults(res.data.results);

    //             // for(let i = 0; i < res.data.results.length; i++) {
    //             //     let j = i + 1;
    //             //     let items = res.data.results[i];

    //             //     console.log(j + '.');
    //             //     console.log('Name: ' + items.name.first + ' ' + items.name.last);
    //             //     console.log('Location: ' + items.location.city + ', ' + items.location.country);
    //             //     console.log('Email: ' + items.email);
    //             //     console.log('');
    //             // }

    //             // console.log(res.data.results);
    //         })            
    //         .catch(err => console.log(err.message));
    // }, [])

    console.log('list results');
    console.log(results);

    return (
        
        <div className='div'>
            <h1>List</h1>
            <div id='categories'>
                <p>Name</p>
                <p>Age</p>
                <p>Location</p>
            </div>
                {results.map(result => (
                    <ul key={result.email} className='employee'>

                            <li>{result.name.first + ' ' + result.name.last}</li>
                            <li>{result.dob.age}</li>
                            <li>{result.location.city + ', ' + result.location.country}</li>

                    </ul>
                ))}
        </div>
        
    );
}

export default List;