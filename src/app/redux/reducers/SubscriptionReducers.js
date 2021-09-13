import { FETCH_ALL_SUBSCRIPTIONSS, SET_SUBSCRIPTIONS_LOADING, FETCH_SUBSCRIPTIONS_PARAM_SUCCESS, FETCH_SUBSCRIPTIONS_PARAM_FAILURE, FETCH_SUBSCRIPTIONS,
   FETCH_SUBSCRIPTIONS_FAILURE,FETCH_SUBSCRIPTIONS_SUCCESS, UPDATE_ADMIN_SUBSCRIPTIONS,
  UPDATE_ADMIN_SUBSCRIPTIONS_SUCCESS,
  UPDATE_ADMIN_SUBSCRIPTIONS_FAILURE
}  from '../actions/SubscriptionActions';
const initialState = {
subs: [],
loading: false,
subsData: {},
redirect: false
}

const subscriptionReducers = (state = initialState, action) => {
    switch (action.type) {
 
        case FETCH_SUBSCRIPTIONS_PARAM_SUCCESS:
        return Object.assign({}, state, {
          subs: action.data,
        });

        case FETCH_SUBSCRIPTIONS_SUCCESS:
        return Object.assign({}, state, {
          subsData: action.data,
        });

     case SET_SUBSCRIPTIONS_LOADING:
        return Object.assign({}, state, {
          loading: action.data
        });
        case UPDATE_ADMIN_SUBSCRIPTIONS_SUCCESS:
          return Object.assign({}, state, {
            redirect: true
          });
    
      default:
        return state;
    }
  };
  
  export default subscriptionReducers;