import {
    ADD_NEW_TAB
  } from "../actions/tab_action";

  const initialState = {
    tabs: [],
    error: "",
    isFetching: false,
    id: localStorage.getItem("user") || null
  };

  export default function reducer(state = initialState, action) {

    switch (action.type) {
      case ADD_NEW_TAB:
        return {
          ...state,
          isFetching: false,
          tabs: [
            ...state.tabs,
            action.payload
          ]
        }
      default:
        return state;
    }
  }