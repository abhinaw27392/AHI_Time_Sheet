import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory'
import {  routerMiddleware } from 'react-router-redux'

import appReducer from '../reducers/combineReducer';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const reduxRouter = routerMiddleware(history)

const logger = store => next => action => {
  if(!console.group){
    return next(action);
  }
  
  console.group(action.type);
  console.log('%c prev state', 'color:gray', store.getState());
  console.log('%c action', 'color:blue', action);
  
  let result = next(action);
  console.log('%c next state', 'color:green', store.getState());
  console.groupEnd(action.type);
  return result;
}

/*
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    
  }
}
*/

//https://stackoverflow.com/questions/39271923/redux-thunk-dispatch-method-fires-undefined-action
//The order of middlewares matters. Try making logger last
export default function configureStore(initialState) {

  const middlewares = [thunk, reduxRouter];
  //if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
  //}

  const store =  createStore(
        appReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

  return store;
}