import {
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_UP_LOADING,
    RESET_PASSWORD
  } from "../actions/signUpActions";
  
  const initialState = {
    success: false,
    loading: false,
  error: false,
  errorMessage: ''
  };
  
  const SignUpReducers = function(state = initialState, action) {
    switch (action.type) {
      case SIGN_UP_LOADING: {
        return {
          ...state,
          loading: true
        };
      }
      case SIGN_UP_SUCCESS: {
        return {
          ...state,
          success: true,
          loading: false
        };
      }
      case RESET_PASSWORD: {
        return {
          ...state,
          success: true,
          loading: false
        };
      }
      case SIGN_UP_ERROR: {
        return {
          success: false,
          loading: false,
          error: true,
          errorMessage: action.error
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default SignUpReducers;
  