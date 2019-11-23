import React from 'react';
import { Route, withRoute } from "react-router-dom";
import "./App.css";

import {getToken} from "./utils/api";
import PriviteRoute from "./components/PriviteRoute";

import Login from "./components/In_Out/Login";
import Header from "./components/Header";
import Signup from "./components/In_Out/Signup";
import Logout from "./components/In_Out/Logout";

// DELETE LATER - JUST TO SEE WHAT I'VE GOT
import ListOfTabs from "./components/Tabs/ListOfTabs";
import TabEdit from "./components/Tabs/TabEdit";
import ListOfCategories from "./components/Categories/ListOfCategories";

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
      {/* <Link to="/account/tabs/:id">Tabs</Link> */}

      {loggedIn &&
      <div>
        <PriviteRoute path="/" component={Header}/>
        {/* <PriviteRoute exact path="/account" component={ListOfCategories}/> */}
        <PriviteRoute exact path="/categories" component={ListOfCategories}/>
        <PriviteRoute exact path="/account" component={ListOfTabs}/>
        <PriviteRoute exact path="/account/:id" component={TabEdit}/>
        <PriviteRoute exact path="/logout" component={Logout}/>
      </div>
}
    </div>
  );
}

export default withRouter(App);