import api from "../utils/api";

export const TABS_START = "TABS_START";
export const TABS_SUCCESS = "TABS_SUCCESS";
export const TABS_ERROR = "TABS_ERROR";

export const TAB_DELETE_START = "TAB_DELETE_START";
export const TAB_DELETE_SUCCESS = "TAB_DELETE_SUCCESS";
export const TAB_DELETE_ERROR = "TAB_DELETE_ERROR";

export const showTabs = () => dispatch => {
  dispatch({ type: TABS_START});
  const id = localStorage.getItem("user")
  api()
    .get(`tabs/${id}`)
    .then(response => {
      dispatch({type: TABS_SUCCESS, payload: response.data.tabs})
      console.log(response.data.tabs)
    })
    .catch(error => {
      dispatch({type: TABS_ERROR, payload: error});
    })
}

export const deleteTab = (tab_id) => dispatch => {
  dispatch({type: TAB_DELETE_START });
  const id = localStorage.getItem("user")
  api()
    .delete(`/tabs/${id}/${tab_id}`)
    .then(response => {
      dispatch({type: TAB_DELETE_SUCCESS, payload: response.data.tabs})
    })
    .catch(error => {
      dispatch({type: TAB_DELETE_ERROR, payload: error})
    })
}