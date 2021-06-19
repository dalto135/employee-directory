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
            <h1>Filtered: Employees 30 or younger</h1>
            <div id='categories'>
                <p>Name</p>
                <p>Age</p>
                <p>Location</p>
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