import React from 'react';

function Filter({results, input}) {
    // let youngPeople = [];
    // results.forEach(i => {
    //     if (i.dob.age <= 30) {
    //         youngPeople.push(i);
    //     }
    // });

    // console.log('filter results');
    // console.log(youngPeople);

    // let input = 'G';
    console.log('input');
    console.log(input);
    let search = [];

    let map = results.map(i => (
        i.name.first.toUpperCase() + ' ' + i.name.last.toUpperCase()
    ));

    console.log('name map');
    console.log(map);

    for (let i = 0; i < results.length; i++) {
        if (map[i].search(input.toUpperCase()) > -1) {
            search.push(results[i]);
        }
    }

    console.log('search');
    console.log(search);

    

    return (
        
        <div className='div'>
            <h1>Employees: Filtered</h1>
            <div id='categories'>
                <h2>Name</h2>
                <h2>Age</h2>
                <h2>Location</h2>
            </div>
                {search.map(result => (
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