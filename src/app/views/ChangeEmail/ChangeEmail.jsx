import React, { useState, useEffect } from 'react';
import { RichTextEditor, Breadcrumb } from "matx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
    Button,
    Icon,
} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { updateEmail } from 'app/redux/actions/SettingsActions';

function ChangeEmail(props) {


    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');



    const handleSubmit = (e) => {
        setOpen(false);
        const emailObj = {
            oldEmail: oldEmail,
            newEmail: newEmail
        }
        props.updateEmail(emailObj, props.history);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleChange = event => {
        event.persist();
        const { value, name } = event.target;
        switch (name) {
            case 'oldEmail':
                setOldEmail(value);
                break;

            case 'newEmail':
                setNewEmail(value);
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
                        { name: "Change Email" }
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
                    label="Old Email"
                    onChange={handleChange}
                    name="oldEmail"
                    type="email"
                    value={oldEmail}

                    validators={["required"]}
                    errorMessages={[
                        "Required",

                    ]}
                />
                <TextValidator
                    className="mb-16 w-100"
                    label="New Email"
                    onChange={handleChange}
                    name="newEmail"
                    type="email"
                    value={newEmail}
                    validators={["required"]}
                    errorMessages={[
                        "Required",
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

    updateEmail: (body, history) => {
        dispatch(updateEmail(body, history));
    },
});
export default connect(mapStateToProp, dispatchToProps)(ChangeEmail);
