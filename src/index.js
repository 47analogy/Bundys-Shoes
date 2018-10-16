import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
import ShoeListPage from './pages/ShoeListPage';
import ShoeFormPage from './pages/ShoeFormPage';





ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route path='shoes/list' component={ShoeListPage} />
            <Route path='shoes/rate' component={ShoeFormPage} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

