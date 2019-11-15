import React from 'react';
import { Link, Route, withRouter } from "react-router-dom";

import {getToken} from "./utils/api";
import PriviteRoute from "./components/PriviteRoute";

import Login from "./components/In_Out/Login";
import Header from "./components/Header";

function App() {
  const loggedIn = getToken();

  return (
    <div>
      <Route exact path="/login" component={Login}/>

      <PriviteRoute path="/" component={Header}/>
    </div>
  );
}

export default withRouter(App);