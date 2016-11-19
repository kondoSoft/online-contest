import React from 'react'
import ReactDOM from 'react-dom'
import FormApp from './FormApp'
import ListApp from './ListApp'
import { Router, Route, browserHistory } from 'react-router'
import './css/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={FormApp}/>
    <Route path="/users" component={ListApp}/>

  </Router>
),  document.getElementById('root'))
