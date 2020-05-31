import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import currentUserReducer from './reducers/currentUserReducer';
import { BrowserRouter as Router } from 'react-router-dom'
import listingsReducer from './reducers/listingsReducer'
import offersReducer from './reducers/offersReducer';
import searchBarReducer from './reducers/searchReducer'


const reducer = combineReducers({
 currentUser: currentUserReducer,
 listings: listingsReducer,
 offers: offersReducer,
 searchTerm:  searchBarReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(thunk)) 
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


