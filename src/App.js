import React, { useEffect, useState } from 'react';
import API from './utils/API';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header';
import List from './components/list';
import Sort from './components/sort';
import Filter from './components/filter';
import './reset.css';

function App() {
    const [results, setResults] = useState([]);


    useEffect(() => {
        API.getList()
            .then(res => {
                setResults(res.data.results);
            })            
            .catch(err => console.log(err.message));
    }, [])

    console.log('app results');
    console.log(results);

    let input = 'hello input';

    function myChangeHandler(event) {
        input = event.target.value;
        console.log('event.target.value');
        console.log(event.target.value);
        console.log(input);
    }

    return (
        <Router>
            {/* <div id='header'>
                <h1 id='title'>
                    <Link to='/'>Employee Directory</Link>
                </h1> */}
                <Header />
                <div id='links'>
                    {/* <Link to='/'>View Employees</Link>
                    <Link to='/sort'>View Sorted</Link> */}

                    <input id='input' onChange={myChangeHandler}></input>
                    <Link to='/filter'>Search</Link>
                </div>
            {/* </div> */}
            
            <Route exact path='/' render={() => <List results={results}/>} /> 
            <Route exact path='/sort' render={() => <Sort results={results}/>} />
            <Route exact path='/filter' render={() => <Filter results={results} input={input}/>} />
        </Router>
    );
}

export default App;
