import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import api from "../../utils/api";
import "./Login.css";

import {getToken} from "../../utils/api";


export default function Login(props) {

	const loggedIn = getToken();

	const [error, setError] = useState()
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
		event.preventDefault()

		api()
			.post("/auth/login", data)
			.then(result => {
				localStorage.setItem("token", result.data.token);
				localStorage.setItem("id", result.data.id);
				console.log(result.data);
				props.history.push({
					pathname: "/account",
					state: result.data.id
				})
			})
			.catch(err => {
				setError(err.response.data.message);
			})
	}
	
	return (
		<div>
		{loggedIn && 
			 <Redirect to="/account" />}

		{!loggedIn && 
			<form onSubmit={handleSubmit} className="Form">
				{error && <div>{error}</div>}

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