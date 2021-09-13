
import axios from 'axios';
export const FETCH_ALL_SUBSCRIPTIONS =  'FETCH_ALL_SUBSCRIPTIONS';
export const SET_SUBSCRIPTIONS_LOADING =  'SET_SUBSCRIPTIONS_LOADING';
export const FETCH_SUBSCRIPTIONS_PARAM_SUCCESS =  'FETCH_SUBSCRIPTIONS_PARAM_SUCCESS';
export const FETCH_SUBSCRIPTIONS_PARAM_FAILURE =  'FETCH_SUBSCRIPTIONS_PARAM_FAILURE';
export const FETCH_SUBSCRIPTIONS = 'FETCH_SUBSCRIPTIONS';
export const FETCH_SUBSCRIPTIONS_FAILURE = 'FETCH_SUBSCRIPTIONS_FAILURE';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';


export const UPDATE_ADMIN_SUBSCRIPTIONS = 'UPDATE_ADMIN_SUBSCRIPTIONS';
export const UPDATE_ADMIN_SUBSCRIPTIONS_SUCCESS = 'UPDATE_ADMIN_SUBSCRIPTIONS_SUCCESS';
export const UPDATE_ADMIN_SUBSCRIPTIONS_FAILURE = 'UPDATE_ADMIN_SUBSCRIPTIONS_FAILURE';


export const fetchSubsList = () => {
    return (dispatch) => {
      dispatch({
        type: FETCH_ALL_SUBSCRIPTIONS
      });
      dispatch({
        type: SET_SUBSCRIPTIONS_LOADING,
        data: true
      });
      axios
        .get(`/api/user/subList`, {
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: FETCH_SUBSCRIPTIONS_PARAM_SUCCESS,
            data: res.data,
  
          });
  
  
          dispatch({
            type: SET_SUBSCRIPTIONS_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: FETCH_SUBSCRIPTIONS_PARAM_FAILURE,
          });
  
          dispatch({
            type: SET_SUBSCRIPTIONS_LOADING,
            data: false
          });
        });
    };
  };

  // export const fetchBlogById = (blogId) => {
  //   const body ={
  //     id: blogId
  //   }
  //   return (dispatch) => {
  //     dispatch({
  //       type: FETCH_SUBSCRIPTIONS
  //     });
  //     dispatch({
  //       type: SET_SUBSCRIPTIONS_LOADING,
  //       data: true
  //     });
  //     axios
  //       .post(`api/admin/getBlogById`, body,{
  //       headers:   {
  //           'x-access-token':localStorage.getItem('token'),     
  //       }

  //       })
  //       .then((res) => {
  //         dispatch({
  //           type: FETCH_SUBSCRIPTIONS_SUCCESS,
  //           data: res.data,
  
  //         });
  
  
  //         dispatch({
  //           type: SET_SUBSCRIPTIONS_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: FETCH_SUBSCRIPTIONS_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_SUBSCRIPTIONS_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };

  // export const updateAdminBlog = (body, history) => {
   
  //   return (dispatch) => {
  //     dispatch({
  //       type: UPDATE_ADMIN_SUBSCRIPTIONS
  //     });
  //     dispatch({
  //       type: SET_SUBSCRIPTIONS_LOADING,
  //       data: true
  //     });
  //     axios
  //       .post(`api/admin/updateBlogById`, body,{
  //       headers:   {
  //           'x-access-token':localStorage.getItem('token'),     
  //       }

  //       })
  //       .then((res) => {
  //         dispatch({
  //           type: UPDATE_ADMIN_SUBSCRIPTIONS_SUCCESS,
  //           data: res.data,
  
  //         });
  //         history.push('/Blog');
  
  //         dispatch({
  //           type: SET_SUBSCRIPTIONS_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: UPDATE_ADMIN_SUBSCRIPTIONS_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_SUBSCRIPTIONS_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };