import "babel-polyfill";
// import cssVars from "css-vars-ponyfill";

import React from "react";
import ReactDOM from "react-dom";
import "./_index.scss";

import * as serviceWorker from "./serviceWorker";
import App from "./app/App";
import axios from 'axios';
import { Store } from "app/redux/Store";
import { logoutUser} from './app/redux/actions/UserActions';
import { props } from 'ramda';
axios.defaults.baseURL = 'https://account-hackfest-3alps67tda-uc.a.run.app/'

const {dispatch} = Store; // direct access to redux store.

 

const UNAUTHORIZED = 401;
axios.interceptors.response.use(
	response => response,
	error => {
		const { status } = error.response;
		if (status === UNAUTHORIZED) {
			localStorage.clear();
			props.history.push({
				pathname: "/login"
			});
		}
		return Promise.reject(error);
	});

axios.interceptors.response.use(
  response => response,
  error => {
    const {status} = error.response;
    if (status === UNAUTHORIZED) {
      dispatch(logoutUser());
    }
   return Promise.reject(error);
 })
 
ReactDOM.render(<App />, document.getElementById("root"));

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
