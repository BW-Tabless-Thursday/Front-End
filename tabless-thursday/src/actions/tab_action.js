import api from "../utils/api";

export const TABS_START = "TABS_START";
export const TABS_SUCCESS = "TABS_SUCCESS";
export const TABS_ERROR = "TABS_ERROR";

export const showTabs = () => dispatch => {
  dispatch({ type: TABS_START});
  const id = localStorage.getItem("user")
  api()
    .get(`tabs/${id}`)
    .then(response => {
      dispatch({type: TABS_SUCCESS, payload: response.data.tabs})
      console.log(response.data)
    })
    .catch(error => {
      dispatch({type: TABS_ERROR, payload: error});
    })
}