import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, hashHistory, Link } from 'react-router'

import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import cyclops from './reducers'
import Patterns from './containers/Patterns'
import Main from './containers/Main'

const logger = createLogger();
const store = createStore(cyclops,
                applyMiddleware(thunk),
                applyMiddleware(logger));




ReactDOM.render(<Provider store={store}>
                  <Router history={hashHistory}>
                    <Route path="/" component={Main} />
                    <Route path="/patterns" component={Patterns} />
                  </Router>
                </Provider>, document.getElementById('cyclops-react'));