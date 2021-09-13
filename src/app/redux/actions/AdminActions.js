
import axios from 'axios';
export const FETCH_ALL_ADMINS = 'FETCH_ALL_ADMINS';
export const SET_ADMIN_LOADING = 'SET_ADMIN_LOADING';
export const FETCH_ADMIN_PARAM_SUCCESS = 'FETCH_ADMIN_PARAM_SUCCESS';
export const FETCH_ADMIN_PARAM_FAILURE = 'FETCH_ADMIN_PARAM_FAILURE';

export const UPDATE_ADMIN_ROLE = 'UPDATE_ADMIN_ROLE';
export const UPDATE_ADMIN_SUCCESS = 'UPDATE_ADMIN_SUCCESS';
export const UPDATE_ADMIN_FAILURE = 'UPDATE_ADMIN_FAILURE';

export const ADD_ADMIN_USER = 'ADD_ADMIN_USER';
export const ADD_ADMIN_USER_SUCCESS = 'ADD_ADMIN_USER_SUCCESS';
export const ADD_ADMIN_USER_FAILURE = 'ADD_ADMIN_USER_FAILURE';


export const ADD_MODERATOR = 'ADD_MODERATOR';
export const ADD_MODERATOR_SUCCESS = 'ADD_MODERATOR_SUCCESS';
export const ADD_MODERATOR_FAILURE = 'ADD_MODERATOR_FAILURE';

export const ENABLE_USER = 'ENABLE_USER';
export const ENABLE_USER_SUCCESS = 'ENABLE_USER_SUCCESS';
export const ENABLE_USER_FAILURE = 'ENABLE_USER_FAILURE';


export const DISABLE_USER = 'DISABLE_USER';
export const DISABLE_USER_SUCCESS = 'DISABLE_USER_SUCCESS';
export const DISABLE_USER_FAILURE = 'DISABLE_USER_FAILURE';


export const fetchAdmins = () => {
    return (dispatch) => {
      dispatch({
        type: FETCH_ALL_ADMINS
      });
      dispatch({
        type: SET_ADMIN_LOADING,
        data: true
      });
      axios
        .get(`api/admin/alluser`, {
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: FETCH_ADMIN_PARAM_SUCCESS,
            data: res.data,
  
          });
  
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: FETCH_ADMIN_PARAM_FAILURE,
          });
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        });
    };
  };

  export const updateAdmin = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: UPDATE_ADMIN_ROLE
      });
      dispatch({
        type: SET_ADMIN_LOADING,
        data: true
      });
      axios
        .post(`api/user/updateUser`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: UPDATE_ADMIN_SUCCESS,
            data: res.data,
  
          });
          history.push('/admin');
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_ADMIN_FAILURE,
          });
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        });
    };
  };

  export const addAdminUser = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: ADD_ADMIN_USER
      });
      dispatch({
        type: SET_ADMIN_LOADING,
        data: true
      });
      axios
        .post(`api/auth/addAdmin`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: ADD_ADMIN_USER_SUCCESS,
            data: res.data,
  
          });
          history.push('/admin');
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: ADD_ADMIN_USER_FAILURE,
          });
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        });
    };
  };

  export const addModerator = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: ADD_MODERATOR
      });
      dispatch({
        type: SET_ADMIN_LOADING,
        data: true
      });
      axios
        .post(`api/auth/addModerator`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: ADD_MODERATOR_SUCCESS,
            data: res.data,
  
          });
          history.push('/admin');
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: ADD_MODERATOR_FAILURE,
          });
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        });
    };
  };

  export const enableUser = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: ENABLE_USER
      });
      dispatch({
        type: SET_ADMIN_LOADING,
        data: true
      });
      axios
        .post(`api/user/enableUser`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: ENABLE_USER_SUCCESS,
            data: res.data,
  
          });
          window.location.reload();
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: ENABLE_USER_FAILURE,
          });
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        });
    };
  };

  export const disableUser = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: DISABLE_USER
      });
      dispatch({
        type: SET_ADMIN_LOADING,
        data: true
      });
      axios
        .post(`api/user/disabledUser`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: DISABLE_USER_SUCCESS,
            data: res.data,
  
          });
          window.location.reload();
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: DISABLE_USER_FAILURE,
          });
  
          dispatch({
            type: SET_ADMIN_LOADING,
            data: false
          });
        });
    };
  };