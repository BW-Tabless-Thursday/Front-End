import {
   TABS_START, TABS_SUCCESS, TABS_ERROR
  } from "../actions/tab_action";

const initialState = {
  tabs: [],
  error: "",
  isFetching: false,
  id: localStorage.getItem("user") || null
};

export function reducer( state = initialState, action){
  
  switch(action.type) {
    case TABS_START:
      return {
        ...state,
        isFetching: true
      }
      
    case TABS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tabs: action.payload,
        id: localStorage.getItem("user")
      }
      
    case TABS_ERROR:
      return{
        ...state,
        isFetching: false,
        error: action.payload
      } 
        
    
    default:
        return state;
  }
}


