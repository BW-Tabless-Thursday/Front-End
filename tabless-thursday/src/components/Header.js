import React from "react";
import { Link, Route } from "react-router-dom"; 

import Logout from "./In_Out/Logout";

export default function Header(){
    return(
        <div>
            <Link to="/logout">Logout</Link>

            <Route exact path="/logout" component={Logout}/>
        </div>
    )
}