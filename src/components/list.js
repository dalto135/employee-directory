import React from 'react';

function List({results}) {
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