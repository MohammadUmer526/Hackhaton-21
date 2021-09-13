
import axios from 'axios';
export const FETCH_ALL_DASHBOARDGRAPH =  'FETCH_ALL_DASHBOARDGRAPH';
export const SET_DASHBOARDGRAPH_LOADING =  'SET_DASHBOARDGRAPH_LOADING';
export const FETCH_DASHBOARDGRAPH_PARAM_SUCCESS =  'FETCH_DASHBOARDGRAPH_PARAM_SUCCESS';
export const FETCH_DASHBOARDGRAPH_PARAM_FAILURE =  'FETCH_DASHBOARDGRAPH_PARAM_FAILURE';
export const FETCH_DASHBOARDGRAPH = 'FETCH_DASHBOARDGRAPH';
export const FETCH_DASHBOARDGRAPH_FAILURE = 'FETCH_DASHBOARDGRAPH_FAILURE';
export const FETCH_DASHBOARDGRAPH_SUCCESS = 'FETCH_DASHBOARDGRAPH_SUCCESS';


export const UPDATE_ADMIN_DASHBOARDGRAPH = 'UPDATE_ADMIN_DASHBOARDGRAPH';
export const UPDATE_ADMIN_DASHBOARDGRAPH_SUCCESS = 'UPDATE_ADMIN_DASHBOARDGRAPH_SUCCESS';
export const UPDATE_ADMIN_DASHBOARDGRAPH_FAILURE = 'UPDATE_ADMIN_DASHBOARDGRAPH_FAILURE';


  
export const fetchDashboardStats = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_ALL_DASHBOARDGRAPH
    });
    dispatch({
      type: SET_DASHBOARDGRAPH_LOADING,
      data: true
    });
    axios
      .get(`/api/admin/contactUsGraph`, {
      headers:   {
          'x-access-token':localStorage.getItem('token'),     
      }

      })
      .then((res) => {
        dispatch({
          type: FETCH_DASHBOARDGRAPH_PARAM_SUCCESS,
          data: res.data,

        });


        dispatch({
          type: SET_DASHBOARDGRAPH_LOADING,
          data: false
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_DASHBOARDGRAPH_PARAM_FAILURE,
        });

        dispatch({
          type: SET_DASHBOARDGRAPH_LOADING,
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
  //       type: FETCH_DASHBOARDGRAPH
  //     });
  //     dispatch({
  //       type: SET_DASHBOARDGRAPH_LOADING,
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
  //           type: FETCH_DASHBOARDGRAPH_SUCCESS,
  //           data: res.data,
  
  //         });
  
  
  //         dispatch({
  //           type: SET_DASHBOARDGRAPH_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: FETCH_DASHBOARDGRAPH_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_DASHBOARDGRAPH_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };

  // export const updateAdminBlog = (body, history) => {
   
  //   return (dispatch) => {
  //     dispatch({
  //       type: UPDATE_ADMIN_DASHBOARDGRAPH
  //     });
  //     dispatch({
  //       type: SET_DASHBOARDGRAPH_LOADING,
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
  //           type: UPDATE_ADMIN_DASHBOARDGRAPH_SUCCESS,
  //           data: res.data,
  
  //         });
  //         history.push('/Blog');
  
  //         dispatch({
  //           type: SET_DASHBOARDGRAPH_LOADING,
  //           data: false
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: UPDATE_ADMIN_DASHBOARDGRAPH_FAILURE,
  //         });
  
  //         dispatch({
  //           type: SET_DASHBOARDGRAPH_LOADING,
  //           data: false
  //         });
  //       });
  //   };
  // };