import React from 'react';
import { Link, Route, withRouter } from "react-router-dom";

import {getToken} from "./utils/api";
import PriviteRoute from "./components/PriviteRoute";

import Login from "./components/In_Out/Login";

function App() {
  const loggedIn = getToken();

  return (
    <div>
      <Route exact path="/login" component={Login}/>
    </div>
  );
}

export default withRouter(App);