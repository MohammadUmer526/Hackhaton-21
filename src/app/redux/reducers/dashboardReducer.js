import { FETCH_ALL_DASHBOARDS, SET_DASHBOARD_LOADING, FETCH_DASHBOARD_PARAM_SUCCESS, FETCH_DASHBOARD_PARAM_FAILURE, FETCH_DASHBOARD,
   FETCH_DASHBOARD_FAILURE,FETCH_DASHBOARD_SUCCESS, UPDATE_ADMIN_DASHBOARD,
  UPDATE_ADMIN_DASHBOARD_SUCCESS,
  UPDATE_ADMIN_DASHBOARD_FAILURE
}  from '../actions/DashboardAction';
const initialState = {
dashboard: [],
loading: false,
dashboardData: {},
redirect: false
}

const dashboardReducers = (state = initialState, action) => {
    switch (action.type) {
 
        case FETCH_DASHBOARD_PARAM_SUCCESS:
        return Object.assign({}, state, {
          dashboard: action.data,
        });

        case FETCH_DASHBOARD_SUCCESS:
        return Object.assign({}, state, {
          dashboardData: action.data,
        });

     case SET_DASHBOARD_LOADING:
        return Object.assign({}, state, {
          loading: action.data
        });
        case UPDATE_ADMIN_DASHBOARD_SUCCESS:
          return Object.assign({}, state, {
            redirect: true
          });
    
      default:
        return state;
    }
  };
  
  export default dashboardReducers;