import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../../actions/login_action"; 

function Logout() {
	logout()
    // history.push('/');
    localStorage.removeItem("token");
    localStorage.removeItem("user");
	return <Redirect to="/login" />
}

const mapStateToProps = (state) => {
	return {...state}
}

const mapDispatchToProps = {
	logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);