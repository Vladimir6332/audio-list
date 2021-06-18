import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import queryReducer from './reducers/queryReducer';

let reducers = combineReducers({ queryReducer });

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
