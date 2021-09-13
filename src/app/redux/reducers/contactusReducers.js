import { FETCH_ALL_CONTACTUSS, SET_CONTACTUS_LOADING, FETCH_CONTACTUS_PARAM_SUCCESS, FETCH_CONTACTUS_PARAM_FAILURE, FETCH_CONTACTUS,
   FETCH_CONTACTUS_FAILURE,FETCH_CONTACTUS_SUCCESS, UPDATE_ADMIN_CONTACTUS,
  UPDATE_ADMIN_CONTACTUS_SUCCESS,
  UPDATE_ADMIN_CONTACTUS_FAILURE
}  from '../actions/ContactUsActions';
const initialState = {
contacts: [],
loading: false,
contactsData: {},
redirect: false
}

const contactusReducers = (state = initialState, action) => {
    switch (action.type) {
 
        case FETCH_CONTACTUS_PARAM_SUCCESS:
        return Object.assign({}, state, {
          contacts: action.data,
        });

        case FETCH_CONTACTUS_SUCCESS:
        return Object.assign({}, state, {
          contactsData: action.data,
        });

     case SET_CONTACTUS_LOADING:
        return Object.assign({}, state, {
          loading: action.data
        });
        case UPDATE_ADMIN_CONTACTUS_SUCCESS:
          return Object.assign({}, state, {
            redirect: true
          });
    
      default:
        return state;
    }
  };
  
  export default contactusReducers;