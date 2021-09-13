import { FETCH_ALL_SENDEMAILS, SET_SENDEMAIL_LOADING, FETCH_SENDEMAIL_PARAM_SUCCESS, FETCH_SENDEMAIL_PARAM_FAILURE, FETCH_SENDEMAIL,
   FETCH_SENDEMAIL_FAILURE,FETCH_SENDEMAIL_SUCCESS, UPDATE_ADMIN_SENDEMAIL,
  UPDATE_ADMIN_SENDEMAIL_SUCCESS,
  UPDATE_ADMIN_SENDEMAIL_FAILURE
}  from '../actions/SendEmailActions';
const initialState = {
templateList: [],
loading: false,
emailData: {},
redirect: false
}

const sendEmailReducers = (state = initialState, action) => {
    switch (action.type) {
 
        case FETCH_SENDEMAIL_PARAM_SUCCESS:
        return Object.assign({}, state, {
          templateList: action.data,
        });

        case FETCH_SENDEMAIL_SUCCESS:
        return Object.assign({}, state, {
          emailData: action.data,
        });

     case SET_SENDEMAIL_LOADING:
        return Object.assign({}, state, {
          loading: action.data
        });
        case UPDATE_ADMIN_SENDEMAIL_SUCCESS:
          return Object.assign({}, state, {
            redirect: true
          });
    
      default:
        return state;
    }
  };
  
  export default sendEmailReducers;