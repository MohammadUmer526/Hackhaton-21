
import axios from 'axios';
export const FETCH_ALL_DASHBOARD =  'FETCH_ALL_DASHBOARD';
export const SET_DASHBOARD_LOADING =  'SET_DASHBOARD_LOADING';
export const FETCH_DASHBOARD_PARAM_SUCCESS =  'FETCH_DASHBOARD_PARAM_SUCCESS';
export const FETCH_DASHBOARD_PARAM_FAILURE =  'FETCH_DASHBOARD_PARAM_FAILURE';
export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const FETCH_DASHBOARD_FAILURE = 'FETCH_DASHBOARD_FAILURE';
export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';


export const UPDATE_ADMIN_DASHBOARD = 'UPDATE_ADMIN_DASHBOARD';
export const UPDATE_ADMIN_DASHBOARD_SUCCESS = 'UPDATE_ADMIN_DASHBOARD_SUCCESS';
export const UPDATE_ADMIN_DASHBOARD_FAILURE = 'UPDATE_ADMIN_DASHBOARD_FAILURE';


export const fetchDashboard = () => {
    return (dispatch) => {
      dispatch({
        type: FETCH_ALL_DASHBOARD
      });
      dispatch({
        type: SET_DASHBOARD_LOADING,
        data: true
      });
      axios
        .get(`/api/admin/contactUsStats`, {
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: FETCH_DASHBOARD_PARAM_SUCCESS,
            data: res.data,
  
          });
  
  
          dispatch({
            type: SET_DASHBOARD_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: FETCH_DASHBOARD_PARAM_FAILURE,
          });
  
          dispatch({
            type: SET_DASHBOARD_LOADING,
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
  //       type: FETCH_DASHBOARD
  //     });
  //     dispatch({
  //       type: SET_DASHBOARD_LOADING,
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
  //           type: FETCH_DASHBOARD_SUCCESS,
  //           data: res.data,
  
  //         });
  
  
  //         dispatch({
  //           type: SET_DASHBOARD_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: FETCH_DASHBOARD_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_DASHBOARD_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };

  // export const updateAdminBlog = (body, history) => {
   
  //   return (dispatch) => {
  //     dispatch({
  //       type: UPDATE_ADMIN_DASHBOARD
  //     });
  //     dispatch({
  //       type: SET_DASHBOARD_LOADING,
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
  //           type: UPDATE_ADMIN_DASHBOARD_SUCCESS,
  //           data: res.data,
  
  //         });
  //         history.push('/Blog');
  
  //         dispatch({
  //           type: SET_DASHBOARD_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: UPDATE_ADMIN_DASHBOARD_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_DASHBOARD_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };