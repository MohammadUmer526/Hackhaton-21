
import history from "history.js";
import {
    toast
  } from 'react-toastify';
import axios from 'axios';
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_LOADING = "SIGN_UP_LOADING";
export const RESET_PASSWORD = "RESET_PASSWORD";

export const signUpUser = (body, history) => (dispatch) => {

  axios.post('rest/api/v1/userSignUp', body, {

    })
    .then(response => {
   
      dispatch(success({}));
      toast.success("User has been registered");
      // setTimeout(()=>{
      //   history.push('/session/signin');
      // }, 3500)
    
    }).catch(err => {
      dispatch(failure(err));
      localStorage.clear();
    })
}

function success(user) {
    return {
      type: SIGN_UP_SUCCESS,
      user
    };
  }
  
  function failure(error) {
    return {
      type: SIGN_UP_ERROR,
      error
    };
  }