import api from "../utils/api";

export const ADD_NEW_TAB = "ADD_NEW_TAB";

export const addTab = (newTab, props) => dispatch => {
  dispatch ({type: ADD_NEW_TAB, payload: newTab})
  api()
    .post(`/tabs/${props.location.state}`, newTab)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}