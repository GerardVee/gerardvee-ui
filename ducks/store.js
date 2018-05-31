import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer as linkitReducer } from './reducers/linkit';

export const reducer = combineReducers({ linkit: linkitReducer });

export const makeStore = (initial) => createStore(reducer, initial, composeWithDevTools(applyMiddleware(thunk)));