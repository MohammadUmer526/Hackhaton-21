import {
    GET_PAGES_LIST_SUCCESS,
    SET_PAGE_LOADING,
    GET_PAGE_DATA_SUCCESS
} from '../actions/sitePagesActions';

const initialState = {
    redirect: false,
    loading: false,
    pagesList: [],
    pageSectionData: {}
}

const settingsReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_PAGES_LIST_SUCCESS:
            return Object.assign({}, state, {
                pagesList: action.data
            })
            case GET_PAGE_DATA_SUCCESS:
                return Object.assign({}, state, {
                    pageSectionData: action.data
                })
        case SET_PAGE_LOADING:
            return Object.assign({}, state, {
                loading: action.data
            });

        default:
            return state;
    }
}

export default settingsReducers;