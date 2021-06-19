import React from 'react';

function Sort({results}) {

    let sortedResults = [];

    results.forEach(i => {
        sortedResults.push(i);
    });

    sortedResults.sort(function(a, b) {
        var nameA = a.name.last.toUpperCase();
        var nameB = b.name.last.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      });

    console.log('sort results');
    console.log(sortedResults);

    return (
        <div className='div'>
            <h1>Sorted: By last name</h1>
            <div id='categories'>
                <p>Name</p>
                <p>Age</p>
                <p>Location</p>
            </div>
                {sortedResults.map(result => (
                    <ul key={result.email} className='employee'>

                            <li>{result.name.first + ' ' + result.name.last}</li>
                            <li>{result.dob.age}</li>
                            <li>{result.location.city + ', ' + result.location.country}</li>
                        
                    </ul>
                ))}
        </div>
    );
}

export default Sort;