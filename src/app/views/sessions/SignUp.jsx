import React, { useState } from "react";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  withStyles,
  CircularProgress} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
// import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { signUpUser } from "../../redux/actions/signUpActions";
import { withRouter } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import { prototype } from "react-autosuggest";

function SignUp(props) {

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [prefLng, setPrefLng] = useState('en');

  const handleFormSubmit = () => {
    const signUpObj = {
      "city": city,
      "email": email,
      "password": password,
      "postalCode": parseInt(postalCode),
      "preferredLanguage": prefLng
    }
    props.signUpUser(signUpObj, props.history);
  }


  return (
    <div className="signup flex flex-center w-100 h-100vh">
      <div className="p-8">
        <Card className="signup-card position-relative y-center">
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12}>
              <div className="p-32 flex flex-center bg-light-gray flex-middle h-100">
                <img
                  src="/assets/images/illustrations/posting_photo.svg"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item lg={7} md={7} sm={7} xs={12}>
              <div className="p-36 h-100">
              <ToastContainer />
                <ValidatorForm useRef="form" onSubmit={handleFormSubmit}>

                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="Email"
                    onChange={(e) => { setEmail(e.target.value) }}
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
                    onChange={(e) => { setpassword(e.target.value) }}
                    name="password"
                    type="password"
                    value={password}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="City"
                    onChange={(e) => { setCity(e.target.value) }}
                    type="text"
                    name="city"
                    value={city}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextValidator
                    className="mb-24 w-100"
                    variant="outlined"
                    label="Postal Code"
                    onChange={(e) => { setPostalCode(e.target.value) }}
                    type="number"
                    name="postalCode"
                    value={postalCode}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  {/* <FormControlLabel
                      className="mb-16"
                      name="agreement"
                      onChange={handleChange}
                      control={<Checkbox />}
                      label="I have read and agree to the terms of service."
                    /> */}
                  <div className="flex flex-middle">
                    <Button
                      className="capitalize"
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Sign up
                    </Button>
                    <span className="ml-16 mr-8">or</span>
                    <Button
                      className="capitalize"
                      onClick={() =>
                        props.history.push("/session/signin")
                      }
                    >
                      Sign in
                    </Button>
                  </div>
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
  // setUser: PropTypes.func.isRequired
  signUpUser: PropTypes.func.isRequired,
});

export default withStyles(prototype.styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      { signUpUser }
    )(SignUp)
  ));
