import {
    FETCH_ALL_ADMINS,
    SET_ADMIN_LOADING,
    FETCH_ADMIN_PARAM_SUCCESS,
    FETCH_ADMIN_PARAM_FAILURE,
    UPDATE_ADMIN_SUCCESS
}
from '../actions/AdminActions';

const initialState = {
    admins: [],
    loading: false,
    redirect: false
}


const AdminReducers = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_ADMIN_PARAM_SUCCESS:
            return Object.assign({}, state, {
                admins: action.data
            });

        case SET_ADMIN_LOADING:
            return Object.assign({}, state, {
                loading: action.data
            });
            case UPDATE_ADMIN_SUCCESS:
                return Object.assign({}, state, {
                  redirect: true
                });
          
        default:
            return state;
    }
}
export default AdminReducers;