import React from "react";
import { Link } from "react-router-dom"; 

import "./Header.css";

export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand font-weight-bold" href="#">Tabless Thursday</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item font-weight-bold">
                                <Link className="nav-link" to="/account">Home</Link>
                            </li>
                            
                            {/* <li className="nav-item font-weight-bold">
                                <Link className="nav-link" to="/categories">Categories</Link>
                            </li> */}
                            
                            <li className="nav-item font-weight-bold">
                                <a className="nav-link" href="https://tabless-thursday-webpt12.netlify.com/index.html">Main Page</a>
                            </li>
                        </ul>        
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item font-weight-bold">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}