import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home'
//import Main from './pages/Main'
import FunctionalMain from './pages/FunctionalMain'
import Product from './pages/Product'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/main/:site' component={FunctionalMain} />
    <Route exact path='/items/:id' component={Product} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
