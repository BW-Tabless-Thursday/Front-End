import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {login} from "../../actions/login_action";

import "./Login.css";

import {getToken} from "../../utils/api";


function Login(props) {

	const loggedIn = getToken();

	const {id} = props;
	useEffect(() => {
		if(id){
		props.history.push("/account")
		}
	},[id])

	// const [error, setError] = useState()
	const [data, setData] = useState({
		username: "",
		password: "",
	})

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		props.login(data)
	}
	
	return (
		<div>
		{loggedIn && 
			 <Redirect to="/account" />}

		{!loggedIn && 
			<form onSubmit={handleSubmit} className="Form">
				{/* {error && <div>{error}</div>} */}

				<input 
					type="text" 
					name="username" 
					placeholder="Username" 
					value={data.username} 
					onChange={handleChange} 
					className="Input"
				/>
				<input 
					type="password" 
					name="password" 
					placeholder="Password" 
					value={data.password} 
					onChange={handleChange} 
					className="Input"
				/>

				<button type="submit" className="MainButton">Login</button>

				<Link to="/signup" className="SecondButton">Sign up</Link>

				<a href="https://tabless-thursday-webpt12.netlify.com/index.html" className="ThirdButton">Take me back to the web-site</a>
			</form>
		}
		</div>
	)
}

function mapStateToProps(state) {
	return {
	  ...state
	}
}
  
const mapDispatchToProps = {
	login
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);