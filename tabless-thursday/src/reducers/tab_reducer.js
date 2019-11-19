import {
    ADD_NEW_TAB
  } from "../actions/tab_action";

  const initialState = {
    tabs: [],
    error: "",
    isFetching: false 
  };

  export default function reducer(state = initialState, action) {

    switch (action.type) {
      case ADD_NEW_TAB:
        return {
          ...state,
          smurfs: [
            ...state.tabs,
            action.payload
          ]
        }
      default:
        return state;
    }
  }