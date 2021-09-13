import React, { Component, useState } from "react";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  withStyles,
  CircularProgress
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { loginWithEmailAndPassword } from "../../redux/actions/LoginActions";
import { prototype } from "react-autosuggest";
import { Alert, AlertTitle } from '@material-ui/lab';

function SignIn(props) {
  const styles = theme => ({
    wrapper: {
      position: "relative"
    },

    buttonProgress: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreement, setAggrement] = useState("");

  const handleFormSubmit = (event) => {
    props.loginWithEmailAndPassword( email, password , props.history);
  };
  
  return (
    <div className="signup flex flex-center w-100 h-100vh">
     
      <div className="p-8">
        <Card className="signup-card position-relative y-center">
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <div className="p-32 flex flex-center flex-middle h-100">
                <img src="/assets/images/illustrations/dreamer.svg" alt="" />
              </div>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <div className="p-36 h-100 bg-light-gray position-relative">
                <ValidatorForm onSubmit={handleFormSubmit}>
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    name="email"
                    value={email}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid"
                    ]}
                  />
                  <TextValidator
                    className="mb-16 w-100"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    value={password}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  {/* <FormControlLabel
                    className="mb-8"
                    name="agreement"
                    onChange={(e) => setAggrement(e.target.value)}
                    control={<Checkbox checked />}
                    label="I have read and agree to the terms of service."
                  /> */}
                  <div className="flex flex-middle mb-8">
                    <div className={props.classes.wrapper}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={props.login.loading}
                        type="submit"
                      >
                        Sign In
                        </Button>
                      {props.login.loading && (
                        <CircularProgress
                          size={24}
                          className={props.classes.buttonProgress}
                        />
                      )}
                    </div>
                    {props.error ? <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  Invalid Username or Pssword</Alert> : null}
                    <span className="ml-16 mr-8">or</span>
                    <Button
                        className="capitalize"
                        onClick={() =>
                         props.history.push("/session/signup")
                        }
                      >
                        Sign up
                      </Button>
                  </div>
                  {/* <Button
                    className="text-primary"
                  onClick={() =>
                    this.props.history.push("/session/forgot-password")
                  }
                  >
                    Forgot password?
                    </Button> */}
                </ValidatorForm>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  login: state.login,
  error: state.login.error,
  errorMessage: state.login.errorMessage,
});
export default withStyles(prototype.styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      { loginWithEmailAndPassword }
    )(SignIn)
  ));


