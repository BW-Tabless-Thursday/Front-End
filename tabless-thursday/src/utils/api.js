import axios from "axios";

export function getToken() {
	return localStorage.getItem("token")
}

export default function api() {
	return axios.create({
		baseURL: "https://tabless-be.herokuapp.com/api",
		headers: {
			Authorization: getToken()
		},
	})
}