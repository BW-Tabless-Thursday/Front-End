import React from 'react';
//import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Route, withRouter } from "react-router-dom";
import "./App.css";

import {getToken} from "./utils/api";
import PriviteRoute from "./components/PriviteRoute";

import Login from "./components/In_Out/Login";
import Header from "./components/Header";
import Signup from "./components/In_Out/Signup";

// DELETE LATER - JUST TO SEE WHAT I'VE GOT
import TabPreview from "./components/Tabs/Tab";

function App() {
  const loggedIn = getToken();

  return (
    <div className="WholeApp">
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>

      <PriviteRoute path="/" component={Header}/>
      <PriviteRoute exact path="/account" component={TabPreview}/>
    </div>
  );
}

export default withRouter(App);