import React from 'react';
import { Route, withRouter, Redirect } from "react-router-dom";
import "./App.css";

import {getToken} from "./utils/api";
import PriviteRoute from "./components/PriviteRoute";

import Login from "./components/In_Out/Login";
import Signup from "./components/In_Out/Signup";
import Logout from "./components/In_Out/Logout";

import Header from "./components/Header";
import ListOfCategories from "./components/Categories/ListOfCategories";
import Home from "./components/Home";

function App() {
  const loggedIn = getToken();

  return (
    <div className="WholeApp">
      {!loggedIn &&
        <div> 
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </div>
      }

      {loggedIn &&
        <div>
          <Redirect to="/account" />
          <PriviteRoute path="/" component={Header}/>
          <PriviteRoute exact path="/categories" component={ListOfCategories}/>
          <PriviteRoute exact path="/account" component={Home}/>
          <PriviteRoute exact path="/logout" component={Logout}/>
        </div>
      }
    </div>
  );
}

export default withRouter(App);