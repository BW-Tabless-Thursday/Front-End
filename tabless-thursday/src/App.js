import React from 'react';
import { Link, Route, withRouter } from "react-router-dom";

import {getToken} from "./utils/api";
import PriviteRoute from "./components/PriviteRoute";

import Login from "./components/In_Out/Login";
import Header from "./components/Header";
import Signup from "./components/In_Out/Signup";

function App() {
  const loggedIn = getToken();

  return (
    <div>
      <Route exact path="/login" component={Login}/>
      <Link to="/signup">Sign up</Link>
      <Route exact path="/signup" component={Signup}/>
      <Link to="/login">Login</Link>

      <PriviteRoute path="/" component={Header}/>
    </div>
  );
}

export default withRouter(App);