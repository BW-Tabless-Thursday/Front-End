import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {reducer as tabReducer} from "./reducers/tab_reducer";
import {reducer as userReducer} from "./reducers/login_reducer";

const rootReducer = combineReducers({
    tab: tabReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>,
    </Provider>, 
    document.getElementById('root'));