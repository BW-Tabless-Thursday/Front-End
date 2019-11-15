import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PriviteRoute(props) {
	const {
		component: Component,
		...rest
	} = props;

	return (
		<Route {...rest} render={(renderProps) => {
			if (localStorage.getItem("token")) {
				return <Component {...renderProps} />
			} else {
                // change the way!!!!
				return <Redirect to="/login" />
			}
		}} />
	)
}