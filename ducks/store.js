import { applyMiddleware, combineReducers, createStore  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as siteReducer } from './reducers/site';
import thunk from 'redux-thunk';

export const reducer = combineReducers({ site: siteReducer });

export const makeStore = (initial) => process.env.NODE_ENV === 'development' ? createStore(reducer, initial, composeWithDevTools(applyMiddleware(thunk))) : createStore(reducer, initial, applyMiddleware(thunk));