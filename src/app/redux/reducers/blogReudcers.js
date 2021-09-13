import { FETCH_ALL_BLOGS, SET_BLOG_LOADING, FETCH_BLOG_PARAM_SUCCESS, FETCH_BLOG_PARAM_FAILURE, FETCH_BLOG,
   FETCH_BLOG_FAILURE,FETCH_BLOG_SUCCESS, UPDATE_ADMIN_BLOG,
  UPDATE_ADMIN_BLOG_SUCCESS,
  UPDATE_ADMIN_BLOG_FAILURE
}  from '../actions/BlogActions';
const initialState = {
blogs: [],
loading: false,
blogData: {},
redirect: false
}

const blogReducers = (state = initialState, action) => {
    switch (action.type) {
 
        case FETCH_BLOG_PARAM_SUCCESS:
        return Object.assign({}, state, {
          blogs: action.data,
        });

        case FETCH_BLOG_SUCCESS:
        return Object.assign({}, state, {
          blogData: action.data,
        });

     case SET_BLOG_LOADING:
        return Object.assign({}, state, {
          loading: action.data
        });
        case UPDATE_ADMIN_BLOG_SUCCESS:
          return Object.assign({}, state, {
            redirect: true
          });
    
      default:
        return state;
    }
  };
  
  export default blogReducers;