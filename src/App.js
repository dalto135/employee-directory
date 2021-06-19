import React, { useEffect, useState } from 'react';
import API from './utils/API';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

    return (
        <Router>
            <Header />
            <Route exact path='/' render={() => <List results={results}/>} /> 
            <Route exact path='/sort' render={() => <Sort results={results}/>} />
            <Route exact path='/filter' render={() => <Filter results={results}/>} />
        </Router>
    );
}

export default App;
