
import axios from 'axios';
export const FETCH_ALL_BLOGS =  'FETCH_ALL_BLOGS';
export const SET_BLOG_LOADING =  'SET_BLOG_LOADING';
export const FETCH_BLOG_PARAM_SUCCESS =  'FETCH_BLOG_PARAM_SUCCESS';
export const FETCH_BLOG_PARAM_FAILURE =  'FETCH_BLOG_PARAM_FAILURE';
export const FETCH_BLOG = 'FETCH_BLOG';
export const FETCH_BLOG_FAILURE = 'FETCH_BLOG_FAILURE';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';


export const UPDATE_ADMIN_BLOG = 'UPDATE_ADMIN_BLOG';
export const UPDATE_ADMIN_BLOG_SUCCESS = 'UPDATE_ADMIN_BLOG_SUCCESS';
export const UPDATE_ADMIN_BLOG_FAILURE = 'UPDATE_ADMIN_BLOG_FAILURE';

export const ADD_ADMIN_BLOG = 'ADD_ADMIN_BLOG';
export const ADD_ADMIN_BLOG_SUCCESS = 'ADD_ADMIN_BLOG_SUCCESS';
export const ADD_ADMIN_BLOG_FAILURE = 'ADD_ADMIN_BLOG_FAILURE';

export const fetchBlogs = () => {
    return (dispatch) => {
      dispatch({
        type: FETCH_ALL_BLOGS
      });
      dispatch({
        type: SET_BLOG_LOADING,
        data: true
      });
      axios
        .get(`api/admin/blogList`, {
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: FETCH_BLOG_PARAM_SUCCESS,
            data: res.data,
  
          });
  
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: FETCH_BLOG_PARAM_FAILURE,
          });
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        });
    };
  };

  export const fetchBlogById = (blogId) => {
    const body ={
      id: blogId
    }
    return (dispatch) => {
      dispatch({
        type: FETCH_BLOG
      });
      dispatch({
        type: SET_BLOG_LOADING,
        data: true
      });
      axios
        .post(`api/admin/getBlogById`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: FETCH_BLOG_SUCCESS,
            data: res.data,
  
          });
  
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: FETCH_BLOG_FAILURE,
          });
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        });
    };
  };

  export const updateAdminBlog = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: UPDATE_ADMIN_BLOG
      });
      dispatch({
        type: SET_BLOG_LOADING,
        data: true
      });
      axios
        .post(`api/admin/updateBlogById`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: UPDATE_ADMIN_BLOG_SUCCESS,
            data: res.data,
  
          });
          history.push('/Blog');
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_ADMIN_BLOG_FAILURE,
          });
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        });
    };
  };

  export const addBlog = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: ADD_ADMIN_BLOG
      });
      dispatch({
        type: SET_BLOG_LOADING,
        data: true
      });
      axios
        .post(`api/admin/createBlog`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: ADD_ADMIN_BLOG_SUCCESS,
            data: res.data,
  
          });
          history.push('/Blog');
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: ADD_ADMIN_BLOG_FAILURE,
          });
  
          dispatch({
            type: SET_BLOG_LOADING,
            data: false
          });
        });
    };
  };