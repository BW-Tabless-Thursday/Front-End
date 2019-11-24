import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {register} from "../../actions/login_action";

// import api from "../../utils/api";
import "./Login.css";

import {getToken} from "../../utils/api";

function Signup(props) {

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
		props.register(data)
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

				<button type="submit" className="MainButton">Sign up</button>

				<Link to="/login" className="SecondButton">Login</Link>

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
	register
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Signup);