import React from 'react';

function Filter({results}) {
    let youngPeople = [];
    results.forEach(i => {
        if (i.dob.age <= 30) {
            youngPeople.push(i);
        }
    });

    console.log('filter results');
    console.log(youngPeople);

    return (
        
        <div className='div'>
            <h1>Employees: 30 years old and younger</h1>
            <div id='categories'>
                <h2>Name</h2>
                <h2>Age</h2>
                <h2>Location</h2>
            </div>
                {youngPeople.map(result => (
                    <ul key={result.email} className='employee'>

                            <li>{result.name.first + ' ' + result.name.last}</li>
                            <li>{result.dob.age}</li>
                            <li>{result.location.city + ', ' + result.location.country}</li>
                            
                    </ul>
                ))}
        </div>
        
    );
}

export default Filter;