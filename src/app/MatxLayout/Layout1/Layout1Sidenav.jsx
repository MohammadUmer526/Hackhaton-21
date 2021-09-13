import React, { Component, Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  Switch,
  Icon,
  withStyles,
  MenuItem,
  Tooltip,
  IconButton,
  MuiThemeProvider
} from "@material-ui/core";

import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { withRouter } from "react-router-dom";
import { MatxMenu } from "matx";
import Sidenav from "../SharedCompoents/Sidenav";
import Brand from "../SharedCompoents/Brand";
import SidenavTheme from "../MatxTheme/SidenavTheme";
import { isMdScreen } from "utils";

import { Link } from "react-router-dom";
const styles = theme => ({});

const IconButtonWhite = withStyles(theme => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "transparent",
    padding: "5px"
  }
}))(IconButton);

const IconSmall = withStyles(() => ({
  root: {
    fontSize: "1rem"
  }
}))(Icon);

class Layout1Sidenav extends Component {
  state = {
    sidenavToggleChecked: false,
    // hidden: true
  };

  componentWillMount() {

    // CLOSE SIDENAV ON ROUTE CHANGE ON MOBILE
    this.unlistenRouteChange = this.props.history.listen((location, action) => {
      if (isMdScreen()) {
        this.updateSidebarMode({ mode: "close" });
      }
    });

  }

  componentWillUnmount() {
    this.unlistenRouteChange();
  }

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings, setDefaultSettings } = this.props;
    const updatedSettings = {
      ...settings,
      layout1Settings: {
        ...settings.layout1Settings,
        leftSidebar: {
          ...settings.layout1Settings.leftSidebar,
          ...sidebarSettings
        }
      }
    };
    setLayoutSettings(updatedSettings);
    setDefaultSettings(updatedSettings);
  };



  handleSidenavToggle = () => {
    let { sidenavToggleChecked } = this.state;
    let mode = sidenavToggleChecked ? "full" : "compact";
    this.updateSidebarMode({ mode });
    this.setState({ sidenavToggleChecked: !sidenavToggleChecked });
  };

  handleSignOut = () => {
    this.props.logoutUser();
  };

  renderLogoSwitch = () => (
    // Open Brand component file to replace logo and text
    <Brand>
      <Switch
        className="sidenav__toggle show-on-lg"
        onChange={this.handleSidenavToggle}
        checked={!this.state.sidenavToggleChecked}
        color="secondary"
      />
    </Brand>
  );

  renderUser = () => {
    let { user } = this.props;
    return (
      <div className="sidenav__user">
        <div className="username-photo">
          <img src={user.photoURL} alt="user" />
        </div>
        <div className="ml-8">
          <span className="username">
            {user.displayName}
          </span>
          <div className="user__menu">
            <MatxMenu
              menuButton={
                <Tooltip title="Settings">
                  <IconButtonWhite
                    aria-label="Delete"
                    className=""
                    size="small"
                  >
                    {/* <IconSmall> settings </IconSmall> */}
                  </IconButtonWhite>
                </Tooltip>
              }
            >
              
              {/* <Link to='/changePass' >
              <MenuItem  className="flex flex-middle"Link style={{ minWidth: 185 }}>
                <Icon> settings </Icon>
                <span className="pl-16"> Change Password </span>
              </MenuItem>
              </Link>
              <MenuItem  className="flex flex-middle" style={{ minWidth: 185 }}>
                <Icon> settings </Icon>
                <span className="pl-16"> Change Email </span>
              </MenuItem> */}
            </MatxMenu>

            <Tooltip title="Profile">
              <IconButtonWhite aria-label="Delete" className="" size="small">
                <IconSmall>person</IconSmall>
              </IconButtonWhite>
            </Tooltip>
            <Tooltip title="Sign out">
              <IconButtonWhite
                aria-label="Delete"
                className=""
                size="small"
                onClick={this.handleSignOut}
              >
                <IconSmall>exit_to_app</IconSmall>
              </IconButtonWhite>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  };

  render() {
    let { theme, settings } = this.props;
    const sidenavTheme =
      settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;
// const [showModal, setShowModal] = useState(false);

  //     const handleSubmit = event => {
  //       setShowModal(false);
    
  //   };

  //   const [password, setPassword] = useState('');
  //   const [newPassword, setNewPassword] = useState('');
  //   const [confirmPassword, setConfirmPassword] = useState('');
  //   const hanldeCloseModal = () => {
  //     setShowModal(false);
  // }
  //   const handleChange = event => {
  //     event.persist();
  //     const { value, name } = event.target;
  //     switch (name) {
  //         case 'firstName':
  //           setPassword(value);
  //             break;

  //         case 'lastName':
  //           setNewPassword(value);
  //             break;

  //         case 'email':
  //           setConfirmPassword(value);
  //             break;

  //         default:
  //             break;
  //     }
  // };

    return (      
      <MuiThemeProvider theme={sidenavTheme}>
         {/* <Dialog
                open={showModal}
                onClose={() => setShowModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Add Member</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <ValidatorForm
                            useRef="form"
                            onSubmit={handleSubmit}
                            onError={errors => null}
                        >
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Password"
                                        onChange={handleChange}
                                        type="password"
                                        name="password"
                                        value={password}
                                        validators={[
                                            "required",
                                            "minStringLength: 4",
                                            "maxStringLength: 9"
                                        ]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="New Password"
                                        onChange={handleChange}
                                        type="password"
                                        name="newpassword"
                                        value={newPassword}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Confirm Password"
                                        onChange={handleChange}
                                        type="password"
                                        name="email"
                                        value={confirmPassword}
                                        validators={["required", "isEmail"]}
                                        errorMessages={["this field is required", "email is not valid"]}
                                    />
                                </Grid>

                               
                            </Grid>
                            <Button color="primary" variant="contained" type="submit">

                                <span className="pl-8 capitalize">Add</span>
                            </Button>
                            <Button onClick={hanldeCloseModal} color="primary">
                                Close
    </Button>
                        </ValidatorForm>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog> */}
        <SidenavTheme theme={sidenavTheme} settings={settings} />

        <div className="sidenav">
          <div className="sidenav__hold">
            {(
              <Fragment>
                {this.renderLogoSwitch()}
                <Sidenav>{this.renderUser()}</Sidenav>
              </Fragment>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout1Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
      setLayoutSettings,
      setDefaultSettings,
      logoutUser
    })(Layout1Sidenav)
  )
);
