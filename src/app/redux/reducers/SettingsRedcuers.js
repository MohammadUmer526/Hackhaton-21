import {
    UPDATE_USER_PASSWORD_SUCCESS,
    SET_UPDATE_PASS_LOADING
} from '../actions/SettingsActions';

const initialState = {
    redirect: false,
    loading: false
}

const settingsReducers = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_USER_PASSWORD_SUCCESS:
            return Object.assign({}, state, {
                redirect: true
            })
        case SET_UPDATE_PASS_LOADING:
            return Object.assign({}, state, {
                loading: action.data
            });

        default:
            return state;
    }
}

export default settingsReducers;