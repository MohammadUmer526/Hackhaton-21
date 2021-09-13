import React, { useState, useEffect } from 'react';
import {  Breadcrumb } from "matx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
    Button,
    Icon,
} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { updatePassword } from 'app/redux/actions/SettingsActions';

function ChangePassword(props) {
    const [newPassword, setNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [cnfrmNewPassword, setCnfrmNewPassword] = useState('');
  
   var  userEmail = localStorage.getItem('email');
   
    const handleSubmit = (e) => {
        setOpen(false);
        const passwordObj = {
            email: userEmail,
            password: newPassword 
        }
        props.updateUserPassword(passwordObj, props.history);
    }
   useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
        if (value !== newPassword) {
          return false;
        }
        return true;
      });
   }, [newPassword,cnfrmNewPassword])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleChange = event => {
        event.persist();
        const { value, name } = event.target;
        switch (name) {
            case 'currentPassword':
                setCurrentPassword(value);
                break;

            case 'newPassword':
                setNewPassword(value);
                break;

            case 'cnfrmNewPassword':
                setCnfrmNewPassword(value);
                break;

         

            default:
                break;
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: "Change Password" }
                    ]}
                />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Submit Form"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to want submit?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
          </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
            <ValidatorForm
                useref="form"
                onSubmit={handleClickOpen}
                onError={errors => null}
            >

<TextValidator
                className="mb-16 w-100"
                label="Current Password"
                onChange={handleChange}
                name="currentPassword"
                type="password"
                value={currentPassword}
                
                validators={["required"]}
                errorMessages={[
                  "Required",
                
                ]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="New Password"
                onChange={handleChange}
                name="newPassword"
                type="password"
                value={newPassword}
                validators={["required", "isPasswordMatch"]}
                errorMessages={[
                  "Required",
                  "password didn't match"
                ]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Confirm New Password"
                onChange={handleChange}
                name="cnfrmNewPassword"
                type="password"
                value={cnfrmNewPassword}
                validators={["required", "isPasswordMatch"]}
                errorMessages={[
                  "Required",
                  "password didn't match"
                ]}
              />
              
                <div>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>submit</Icon>
                        <span className="pl-8 capitalize">Update</span>
                    </Button>
                    <Button cvariant="contained" >
                        <span className="pl-8 capitalize">Cancel</span>
                    </Button>
                </div>
            </ValidatorForm>

        </div>
    )
}

const mapStateToProp = (state, props) => {

    return {
        redirect: state.settings.redirect,
        loading: state.settings.loading,
    };
}
const dispatchToProps = (dispatch) => ({
 
    updateUserPassword: (body, history) => {
        dispatch(updatePassword(body, history));
    },
});
export default connect(mapStateToProp, dispatchToProps)(ChangePassword);
