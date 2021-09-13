
import axios from 'axios';
export const FETCH_ALL_CONTACTUS =  'FETCH_ALL_CONTACTUS';
export const SET_CONTACTUS_LOADING =  'SET_CONTACTUS_LOADING';
export const FETCH_CONTACTUS_PARAM_SUCCESS =  'FETCH_CONTACTUS_PARAM_SUCCESS';
export const FETCH_CONTACTUS_PARAM_FAILURE =  'FETCH_CONTACTUS_PARAM_FAILURE';
export const FETCH_CONTACTUS = 'FETCH_CONTACTUS';
export const FETCH_CONTACTUS_FAILURE = 'FETCH_CONTACTUS_FAILURE';
export const FETCH_CONTACTUS_SUCCESS = 'FETCH_CONTACTUS_SUCCESS';


export const UPDATE_ADMIN_CONTACTUS = 'UPDATE_ADMIN_CONTACTUS';
export const UPDATE_ADMIN_CONTACTUS_SUCCESS = 'UPDATE_ADMIN_CONTACTUS_SUCCESS';
export const UPDATE_ADMIN_CONTACTUS_FAILURE = 'UPDATE_ADMIN_CONTACTUS_FAILURE';


export const fetchContactUs = () => {
    return (dispatch) => {
      dispatch({
        type: FETCH_ALL_CONTACTUS
      });
      dispatch({
        type: SET_CONTACTUS_LOADING,
        data: true
      });
      axios
        .get(`/api/admin/contactUsList`, {
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: FETCH_CONTACTUS_PARAM_SUCCESS,
            data: res.data,
  
          });
  
  
          dispatch({
            type: SET_CONTACTUS_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: FETCH_CONTACTUS_PARAM_FAILURE,
          });
  
          dispatch({
            type: SET_CONTACTUS_LOADING,
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
  //       type: FETCH_CONTACTUS
  //     });
  //     dispatch({
  //       type: SET_CONTACTUS_LOADING,
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
  //           type: FETCH_CONTACTUS_SUCCESS,
  //           data: res.data,
  
  //         });
  
  
  //         dispatch({
  //           type: SET_CONTACTUS_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: FETCH_CONTACTUS_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_CONTACTUS_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };

  // export const updateAdminBlog = (body, history) => {
   
  //   return (dispatch) => {
  //     dispatch({
  //       type: UPDATE_ADMIN_CONTACTUS
  //     });
  //     dispatch({
  //       type: SET_CONTACTUS_LOADING,
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
  //           type: UPDATE_ADMIN_CONTACTUS_SUCCESS,
  //           data: res.data,
  
  //         });
  //         history.push('/Blog');
  
  //         dispatch({
  //           type: SET_CONTACTUS_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: UPDATE_ADMIN_CONTACTUS_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_CONTACTUS_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };