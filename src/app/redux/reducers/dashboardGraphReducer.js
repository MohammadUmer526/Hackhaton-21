import { FETCH_ALL_DASHBOARDGRAPHS, SET_DASHBOARDGRAPH_LOADING, FETCH_DASHBOARDGRAPH_PARAM_SUCCESS, FETCH_DASHBOARDGRAPH_PARAM_FAILURE, FETCH_DASHBOARDGRAPH,
   FETCH_DASHBOARDGRAPH_FAILURE,FETCH_DASHBOARDGRAPH_SUCCESS, UPDATE_ADMIN_DASHBOARDGRAPH,
  UPDATE_ADMIN_DASHBOARDGRAPH_SUCCESS,
  UPDATE_ADMIN_DASHBOARDGRAPH_FAILURE
}  from '../actions/DashboardGraphAction';
const initialState = {
dashboardGraph: [],
loading: false,
dashboardGraphData: {},
redirect: false
}

const dashboardGraphReducers = (state = initialState, action) => {
    switch (action.type) {
 
        case FETCH_DASHBOARDGRAPH_PARAM_SUCCESS:
        return Object.assign({}, state, {
          dashboardGraph: action.data,
        });

        case FETCH_DASHBOARDGRAPH_SUCCESS:
        return Object.assign({}, state, {
          dashboardGraphData: action.data,
        });

     case SET_DASHBOARDGRAPH_LOADING:
        return Object.assign({}, state, {
          loading: action.data
        });
        case UPDATE_ADMIN_DASHBOARDGRAPH_SUCCESS:
          return Object.assign({}, state, {
            redirect: true
          });
    
      default:
        return state;
    }
  };
  
  export default dashboardGraphReducers;