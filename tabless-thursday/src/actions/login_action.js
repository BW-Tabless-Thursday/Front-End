import api from "../utils/api";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";

export const register = (user_info) => dispatch => {
    dispatch ({ type: REGISTER_START });

    api()
        .post("/auth/register", user_info)
        .then(response => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.id);
            dispatch({ type: REGISTER_SUCCESS, payload: response.data.id})
        })
        .catch(error => {
            dispatch({type: REGISTER_ERROR, payload: error});
        })
}

export const login = ( props, user_info) => dispatch => {
    dispatch({ type: LOGIN_START })
    api()
        .post("/auth/login", user_info)
        .then(response => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.id);
            console.log(response.data)
            props.history.push({
                pathname: "/account",
                state: response.data.id
            })
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.id})
        })
        .catch(error => {
            dispatch({type: LOGIN_ERROR, payload: error});
        })
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
}