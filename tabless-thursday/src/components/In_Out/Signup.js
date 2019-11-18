import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import "./Login.css";

export default function Signup(props) {
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
			.post("/auth/register", data)
			.then(result => {
				localStorage.setItem("token", result.data.token);
				// change the way!!!!
				props.history.push("/login")
			})
			.catch(err => {
				setError(err.response.data.message)
			})
	}
	
	return (
		<form onSubmit={handleSubmit} className="Form">
			{error && <div>{error}</div>}

			<input type="text" name="username" placeholder="Username" value={data.username} onChange={handleChange} className="Input"/>
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} className="Input"/>

			<button type="submit" className="MainButton">Sign up</button>

			<Link to="/login" className="SecondButton">Login</Link>
		</form>
	)
}