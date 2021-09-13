import axios from 'axios';
export const GET_PAGES_LIST_FAILURE = 'GET_PAGES_LIST_FAILURE';
export const GET_PAGES_LIST = 'GET_PAGES_LIST';
export const GET_PAGES_LIST_SUCCESS = 'GET_PAGES_LIST_SUCCESS';
export const SET_PAGE_LOADING = 'SET_PAGE_LOADING';
export const GET_PAGE_DATA_SUCCESS = ' GET_PAGE_DATA_SUCCESS';
export const GET_PAGES_SECTION = 'GET_PAGES_SECTION';
export const GET_PAGE_DATA_FAILURE = 'GET_PAGE_DATA_FAILURE';
export const UPDATE_PAGES_SECTION = 'UPDATE_PAGES_SECTION';
export const UPDATE_PAGE_DATA_SUCCESS = 'UPDATE_PAGE_DATA_SUCCESS';
export const UPDATE_PAGE_DATA_FAILURE = 'UPDATE_PAGE_DATA_FAILURE';

export const getPagesList = () => {
    return (dispatch) => {
      dispatch({
        type: GET_PAGES_LIST
      });
      dispatch({
        type: SET_PAGE_LOADING,
        data: true
      });
      axios
        .get(`api/admin/pageList` ,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: GET_PAGES_LIST_SUCCESS,
            data: res.data,
  
          });
  
          dispatch({
            type: SET_PAGE_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_PAGES_LIST_FAILURE,
          });
  
          dispatch({
            type: SET_PAGE_LOADING,
            data: false
          });
        });
    };
  };



  export const getPageSection = (id) => {
    return (dispatch) => {
      dispatch({
        type: GET_PAGES_SECTION
      });
      dispatch({
        type: SET_PAGE_LOADING,
        data: true
      });
      axios
        .get(`api/admin/getPageSectionDataById/${id}`,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: GET_PAGE_DATA_SUCCESS,
            data: res.data,
  
          });
          dispatch({
            type: SET_PAGE_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_PAGE_DATA_FAILURE,
          });
  
          dispatch({
            type: SET_PAGE_LOADING,
            data: false
          });
        });
    };
  };

  export const updatePageSection = (body, history) => {
    return (dispatch) => {
      dispatch({
        type: UPDATE_PAGES_SECTION
      });
      dispatch({
        type: SET_PAGE_LOADING,
        data: true
      });
      axios
        .post(`api/admin/updateSectionById`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: UPDATE_PAGE_DATA_SUCCESS,
           
  
          });
          history.push('/pageList');
          dispatch({
            type: SET_PAGE_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_PAGE_DATA_FAILURE,
          });
  
          dispatch({
            type: SET_PAGE_LOADING,
            data: false
          });
        });
    };
  };