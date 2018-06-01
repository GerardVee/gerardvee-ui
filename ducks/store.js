import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer as linkitReducer } from './reducers/linkit';
import { reducer as siteReducer } from './reducers/site';

export const reducer = combineReducers({ linkit: linkitReducer, site: siteReducer });

// change this dev when shipping to production
export const makeStore = (initial) => createStore(reducer, initial, composeWithDevTools(applyMiddleware(thunk)));