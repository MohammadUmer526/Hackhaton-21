import axios from 'axios';
export const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD';
export const SET_UPDATE_PASS_LOADING = 'SET_UPDATE_PASS_LOADING';
export const UPDATE_USER_PASSWORD_SUCCESS = 'UPDATE_USER_PASSWORD_SUCCESS';
export const UPDATE_USER_PASSWORD_FAILURE = 'UPDATE_USER_PASSWORD_FAILURE';
export const UPDATE_USER_EMAIL = ' UPDATE_USER_EMAIL';
export const SET_UPDATE_EMAIL_LOADING = 'SET_UPDATE_EMAIL_LOADING';
export const UPDATE_USER_EMAIL_SUCCESS = 'UPDATE_USER_EMAIL_SUCCESS';
export const UPDATE_USER_EMAIL_FAILURE = 'UPDATE_USER_EMAIL_FAILURE';

export const updatePassword = (body, history) => {
    return (dispatch) => {
      dispatch({
        type: UPDATE_USER_PASSWORD
      });
      dispatch({
        type: SET_UPDATE_PASS_LOADING,
        data: true
      });
      axios
        .post(`api/user/updatePassword`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: UPDATE_USER_PASSWORD_SUCCESS,
            data: res.data,
  
          });
          history.push('/dashboard/analytics');
  
          dispatch({
            type: SET_UPDATE_PASS_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_USER_PASSWORD_FAILURE,
          });
  
          dispatch({
            type: SET_UPDATE_PASS_LOADING,
            data: false
          });
        });
    };
  };



  export const updateEmail = (body, history) => {
    return (dispatch) => {
      dispatch({
        type: UPDATE_USER_EMAIL
      });
      dispatch({
        type: SET_UPDATE_EMAIL_LOADING,
        data: true
      });
      axios
        .post(`api/user/updateEmail`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: UPDATE_USER_EMAIL_SUCCESS,
            data: res.data,
  
          });
          history.push('/dashboard/analytics');
  
          dispatch({
            type: SET_UPDATE_EMAIL_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_USER_EMAIL_FAILURE,
          });
  
          dispatch({
            type: SET_UPDATE_EMAIL_LOADING,
            data: false
          });
        });
    };
  };