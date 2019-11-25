import {
    REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT
} from "../actions/login_action";

const initialState = {
    id: localStorage.getItem("user") || null,
    isFetching: false,
    error: null,
    tabs: []
}

export function reducer( state = initialState, action){
    switch(action.type) {

        case REGISTER_START:
            return {
                ...state,
                isFetching: true
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                id: action.payload
            }

        case REGISTER_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case LOGIN_START: 
            return {
                ...state,
                isFetching: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                id: action.payload
            }

        case LOGIN_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case LOGOUT:
            return {
                ...state,
                id: null
            }

        default:
            return state;
    }
}