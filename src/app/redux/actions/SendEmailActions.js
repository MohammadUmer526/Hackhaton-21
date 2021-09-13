
import axios from 'axios';
export const FETCH_ALL_SENDEMAIL =  'FETCH_ALL_SENDEMAIL';
export const SET_SENDEMAIL_LOADING =  'SET_SENDEMAIL_LOADING';
export const FETCH_SENDEMAIL_PARAM_SUCCESS =  'FETCH_SENDEMAIL_PARAM_SUCCESS';
export const FETCH_SENDEMAIL_PARAM_FAILURE =  'FETCH_SENDEMAIL_PARAM_FAILURE';
export const FETCH_SENDEMAIL = 'FETCH_SENDEMAIL';
export const FETCH_SENDEMAIL_FAILURE = 'FETCH_SENDEMAIL_FAILURE';
export const FETCH_SENDEMAIL_SUCCESS = 'FETCH_SENDEMAIL_SUCCESS';


export const UPDATE_ADMIN_SENDEMAIL = 'UPDATE_ADMIN_SENDEMAIL';
export const UPDATE_ADMIN_SENDEMAIL_SUCCESS = 'UPDATE_ADMIN_SENDEMAIL_SUCCESS';
export const UPDATE_ADMIN_SENDEMAIL_FAILURE = 'UPDATE_ADMIN_SENDEMAIL_FAILURE';


export const fetchEmailTemplateList = () => {
    return (dispatch) => {
      dispatch({
        type: FETCH_ALL_SENDEMAIL
      });
      dispatch({
        type: SET_SENDEMAIL_LOADING,
        data: true
      });
      axios
        .get(`/api/admin/contactUsEmailList`, {
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: FETCH_SENDEMAIL_PARAM_SUCCESS,
            data: res.data,
  
          });
  
  
          dispatch({
            type: SET_SENDEMAIL_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: FETCH_SENDEMAIL_PARAM_FAILURE,
          });
  
          dispatch({
            type: SET_SENDEMAIL_LOADING,
            data: false
          });
        });
    };
  };

  export const sendEmailService = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: UPDATE_ADMIN_SENDEMAIL
      });
      dispatch({
        type: SET_SENDEMAIL_LOADING,
        data: true
      });
      axios
        .post(`/api/admin/sendEmail`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: UPDATE_ADMIN_SENDEMAIL_SUCCESS,
            data: res.data,
  
          });
          history.push('/dashboard');
  
          dispatch({
            type: SET_SENDEMAIL_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_ADMIN_SENDEMAIL_FAILURE,
          });
  
          dispatch({
            type: SET_SENDEMAIL_LOADING,
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
  //       type: FETCH_SENDEMAIL
  //     });
  //     dispatch({
  //       type: SET_SENDEMAIL_LOADING,
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
  //           type: FETCH_SENDEMAIL_SUCCESS,
  //           data: res.data,
  
  //         });
  
  
  //         dispatch({
  //           type: SET_SENDEMAIL_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: FETCH_SENDEMAIL_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_SENDEMAIL_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };

  export const sendEmail = (body, history) => {
   
    return (dispatch) => {
      dispatch({
        type: UPDATE_ADMIN_SENDEMAIL
      });
      dispatch({
        type: SET_SENDEMAIL_LOADING,
        data: true
      });
      axios
        .post(`/api/admin/sendEmail`, body,{
        headers:   {
            'x-access-token':localStorage.getItem('token'),     
        }

        })
        .then((res) => {
          dispatch({
            type: UPDATE_ADMIN_SENDEMAIL_SUCCESS,
            data: res.data,
  
          });
          history.push('/dashboard');
  
          dispatch({
            type: SET_SENDEMAIL_LOADING,
            data: false
          });
        })
        .catch((err) => {
          dispatch({
            type: UPDATE_ADMIN_SENDEMAIL_FAILURE,
          });
  
          dispatch({
            type: SET_SENDEMAIL_LOADING,
            data: false
          });
        });
    };
  };