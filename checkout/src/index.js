import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/checkout' component={Checkout} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
