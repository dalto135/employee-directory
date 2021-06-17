import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import List from './components/list';
import Sort from './components/sort';
import Filter from './components/filter';
import './reset.css';

function App() {
    return (
        <Router>
            <Header />
            <Route exact path='/' compontent={List} />
            <Route exact path='/sort' compontent={Sort} />
            <Route exact path='/filter' compontent={Filter} />
        </Router>
    );
}

export default App;
