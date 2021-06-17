import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import List from './components/list';
import Sort from './components/sort';
import Filter from './components/filter';
import './reset.css';
import logo from './logo.svg';
// import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Route exact path='/' compontent={List} />
            <Route exact path='/sort' compontent={Sort} />
            <Route exact path='/filter' compontent={Filter} />
            <img src={logo} className="App-logo" alt="logo" />
        </Router>
    );
}

export default App;
