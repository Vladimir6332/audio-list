import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import query from './reducers/queryReducer';

let rootReducer = combineReducers({ query });

export type rootStateType = ReturnType<typeof rootReducer>;

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
