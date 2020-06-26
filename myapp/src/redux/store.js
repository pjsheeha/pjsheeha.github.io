import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: userReducer,
    UI: uiReducer,
});

// Compose devtools if we have the extension.
const store = window.__REDUX_DEVTOOLS_EXTENSION__ ? 
    createStore(reducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__())) :
    createStore(reducers, initialState, compose(applyMiddleware(...middleware)));

export default store;