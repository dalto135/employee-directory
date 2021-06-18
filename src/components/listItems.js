import React from 'react';

function listItems(props) {
    return (
        <ul>
            {/* {props.results.map(result => (
                <li key={result}>
                    <p>{result.email}</p>
                </li>
            ))} */}
            <p>{props.results}</p>
        </ul>
    );
}

export default listItems;
