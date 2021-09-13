import React, { useState, useEffect } from 'react';
import {
    Card,
    Icon,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from 'react-redux';
import { updateAdmin, fetchAdmins, addAdminUser, addModerator, enableUser, disableUser } from 'app/redux/actions/AdminActions';

function Admin(props) {
    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(-1),
            float: "right;",

        },
        input: {
            display: "none"
        },

    }));
    useEffect(() => {
        props.fetchAdmins();
    }, []);

    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalEnabled, setShowModalEnabled] = useState(false);
    const [showModalDisabled, setShowModalDisabled] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userType, setUserType] = useState('admin');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [enabledUser, setEnabledUser] = useState('');
    const [disabledUser, setDisabledUser] = useState('');

    const [firstNameEdit, setFirstNameEdit] = useState('');
    const [lastNameEdit, setLastNameEdit] = useState('');
    const [ageEdit, setAgeEdit] = useState('');
    const [genderEdit, setGenderEdit] = useState('');
    const [emailEdit, setEmailEdit] = useState('');
    const [phoneEdit, setPhoneEdit] = useState('');
    const [editUserName, setEditUserName] = useState('');
    const [editUserPassword, setEditUserPassword] = useState('');
    const [adminData, setAdminData] = useState('');

    const handleClick = (admin) => {
        setAdminData(admin);
        setFirstNameEdit(admin?.firstName);
        setLastNameEdit(admin?.lastName);
        setAgeEdit(admin?.age);
        setGenderEdit(admin?.gender);
        setPhoneEdit(admin?.phoneNumber);
        setEmailEdit(admin?.email);
        setEditUserName(admin?.username);
        setEditUserPassword(admin?.password);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = event => {
        event.persist();
        const { value, name } = event.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;

            case 'lastName':
                setLastName(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case 'phone':
                setPhone(value);
                break;

            case 'gender':
                setGender(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'userType':
                setUserType(value);
                break;

            case 'userName':
                setUserName(value);
                break;
            case 'userPassword':
                setUserPassword(value);
                break;
            default:
                break;
        }
    };

    const handleChangeEdit = event => {
        event.persist();
        const { value, name } = event.target;
        switch (name) {
            case 'firstNameEdit':
                setFirstNameEdit(value);
                break;

            case 'lastNameEdit':
                setLastNameEdit(value);
                break;

            case 'emailEdit':
                setEmailEdit(value);
                break;

            case 'phoneEdit':
                setPhoneEdit(value);
                break;

            case 'genderEdit':
                setGenderEdit(value);
                break;
            case 'ageEdit':
                setAgeEdit(value);
                break;

            case 'editUserName':
                setEditUserName(value);
                break;


            case 'editUserPassword':
                setEditUserPassword(value);
                break;

            default:
                break;
        }
    };
    const handleSubmit = event => {
        const adminObj = {

            username: userName,
            email: email,
            password: userPassword,
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            phoneNumber: phone
        }
        const moderatorObj = {
            username: userName,
            email: email,
            password: userPassword,
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            phoneNumber: phone
        }
        userType === 'admin' ? props.addAdminUser(adminObj, props.history) : props.addModeratorUser(moderatorObj, props.history);
        hanldeCloseModal();
        setGender('male');

    };

    const handleSubmitEdit = event => {

        const editAdminObj = {
            id: adminData?._id,
            username: editUserName,
            email: emailEdit,
            password: editUserPassword,
            firstName: firstNameEdit,
            lastName: lastNameEdit,
            age: ageEdit,
            gender: genderEdit,
            phoneNumber: phoneEdit,
            roleId: adminData.roles[0]
        }

        props.updateAdmin(editAdminObj, props.history);
        hanldeCloseModalEdit();
    };
    const hanldeCloseModal = () => {
        setShowModal(false);
        setFirstName('');
        setLastName('');
        setAge('');
        setGender('');
        setPhone('');
        setEmail('');
        setUserName('');
        setUserPassword('');
    }
    const hanldeCloseModalEdit = () => {
        setShowModalEdit(false);
        setFirstNameEdit('');
        setLastNameEdit('');
        setAgeEdit('');
        setGenderEdit('');
        setPhoneEdit('');
        setEmailEdit('');
    }

    const handleEdit = (admin, index) => {
        handleClose();
        setShowModalEdit(true);
    }
    const openEnabledModal = (admin) => {
        setShowModalEnabled(true);
        setEnabledUser(admin?._id);

    }
    const handleCloseModalEnabled = () => {
        setShowModalEnabled(false);
        setEnabledUser('');
    }
    const hanldeDisabledUser = () => {
       const disableUserObj = {
            id: disableUser._id
        }
        props.disableUser(disableUserObj, props.history);
        setShowModalEnabled(false);
    }

    const openDisabledModal = (admin) => {
        setShowModalDisabled(true);
        setDisabledUser(admin?._id);

    }
    const handleCloseModalDisabled = () => {
        setShowModalDisabled(false);
        setDisabledUser('');
    }
    const handleEnabledUser = () => {
        const enableUserObj = {
            id: enableUser._id
        }

        props.enableUser(enableUserObj, props.history);
       
        setShowModalDisabled(false);
    }
    return (
        <div>
            <Dialog
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
                                        label="First Name"
                                        onChange={handleChange}
                                        type="text"
                                        name="firstName"
                                        value={firstName}
                                        validators={[
                                            "required",
                                            "minStringLength: 4",
                                            "maxStringLength: 9"
                                        ]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <RadioGroup
                                        className="mb-16"
                                        value={userType}
                                        name="userType"
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value="admin"
                                            control={<Radio color="secondary" />}
                                            label="Admin"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="moderator"
                                            control={<Radio color="secondary" />}
                                            label="Moderator"
                                            labelPlacement="end"
                                        />

                                    </RadioGroup>
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Last Name"
                                        onChange={handleChange}
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="User Name"
                                        onChange={handleChange}
                                        type="text"
                                        name="userName"
                                        value={userName}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Password"
                                        onChange={handleChange}
                                        type="text"
                                        name="userPassword"
                                        value={userPassword}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Email"
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        value={email}
                                        validators={["required", "isEmail"]}
                                        errorMessages={["this field is required", "email is not valid"]}
                                    />
                                    <TextValidator
                                        className="mb-32 w-100"
                                        label="Age"
                                        onChange={handleChange}
                                        type="number"
                                        name="age"
                                        value={age}
                                        validators={[
                                            "required",

                                        ]}
                                        errorMessages={["this field is required"]}
                                    />
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <RadioGroup
                                        className="mb-16"
                                        value={gender}
                                        name="gender"
                                        onChange={handleChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio color="secondary" />}
                                            label="Male"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio color="secondary" />}
                                            label="Female"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="others"
                                            control={<Radio color="secondary" />}
                                            label="Others"
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Phone"
                                        onChange={handleChange}
                                        name="phone"
                                        type="phone"
                                        value={phone}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
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
            </Dialog>

            <Dialog
                open={showModalEdit}
                onClose={() => setShowModalEdit(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Edit Member</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <ValidatorForm
                            useRef="form"
                            onSubmit={handleSubmitEdit}
                            onError={errors => null}
                        >
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>

                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="First Name"
                                        onChange={handleChangeEdit}
                                        type="text"
                                        name="firstNameEdit"
                                        value={firstNameEdit}
                                        validators={[
                                            "required",
                                            "minStringLength: 4",
                                            "maxStringLength: 9"
                                        ]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Last Name"
                                        onChange={handleChangeEdit}
                                        type="text"
                                        name="lastNameEdit"
                                        value={lastNameEdit}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Email"
                                        onChange={handleChangeEdit}
                                        type="email"
                                        name="emailEdit"
                                        value={emailEdit}
                                        validators={["required", "isEmail"]}
                                        errorMessages={["this field is required", "email is not valid"]}
                                    />
                                    <TextValidator
                                        className="mb-32 w-100"
                                        label="Age"
                                        onChange={handleChangeEdit}
                                        type="number"
                                        name="ageEdit"
                                        value={ageEdit}
                                        validators={[
                                            "required",

                                        ]}
                                        errorMessages={["this field is required"]}
                                    />
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <RadioGroup
                                        className="mb-16"
                                        value={genderEdit}
                                        name="genderEdit"
                                        onChange={handleChangeEdit}
                                        row
                                    >
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio color="secondary" />}
                                            label="Male"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio color="secondary" />}
                                            label="Female"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="others"
                                            control={<Radio color="secondary" />}
                                            label="Others"
                                            labelPlacement="end"
                                        />
                                    </RadioGroup>
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Phone"
                                        onChange={handleChangeEdit}
                                        name="phoneEdit"
                                        type="phone"
                                        value={phoneEdit}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="User Name"
                                        onChange={handleChangeEdit}
                                        name="editUserName"
                                        type="text"
                                        value={editUserName}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="User Password"
                                        onChange={handleChangeEdit}
                                        name="editUserPassword"
                                        type="text"
                                        value={editUserPassword}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />
                                </Grid>
                            </Grid>
                            <Button color="primary" variant="contained" type="submit">

                                <span className="pl-8 capitalize">Update</span>
                            </Button>
                            <Button onClick={hanldeCloseModalEdit} color="primary">
                                Close
    </Button>
                        </ValidatorForm>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>

            <Dialog
                open={showModalEnabled}
                onClose={handleCloseModalEnabled}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Disabled User"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to disabled it?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModalEnabled} color="primary">
                        No
          </Button>
                    <Button onClick={hanldeDisabledUser} color="primary" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={showModalDisabled}
                onClose={handleCloseModalDisabled}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Enable User"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to enable it?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModalDisabled} color="primary">
                        No
          </Button>
                    <Button onClick={handleEnabledUser} color="primary" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
            <Card elevation={3} className="pt-20 mb-24">
                <Button variant="contained" onClick={() => setShowModal(true)} className={classes.button}>
                    Add Member
        </Button>
                <div className="card-title px-24 mb-12">Admin</div>

                <div className="overflow-auto">
                    <Table className="product-table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="px-24" colSpan={4}>
                                    First Name
                  </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Last Name
                  </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Email
                  </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Phone
                  </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Gender
                  </TableCell>

                                <TableCell className="px-0" colSpan={2}>
                                    Age
                  </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Active
                  </TableCell>
                                <TableCell className="px-0" colSpan={1}>
                                    Actions
                  </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props?.admins?.map((admin, index) => (

                                <TableRow key={index}>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">
                                        <div className="flex flex-middle">
                                            <p className="m-0 ml-8">{admin.firstName}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                                        {admin.lastName}
                                    </TableCell>

                                    <TableCell className="px-0" align="left" colSpan={2}>
                                        {admin.email}
                                    </TableCell>
                                    <TableCell className="px-0" align="left" colSpan={2}>
                                        {admin.phoneNumber}
                                    </TableCell>
                                    <TableCell className="px-0" align="left" colSpan={2}>
                                        {admin.gender}
                                    </TableCell>
                                    <TableCell className="px-0" align="left" colSpan={2}>
                                        {admin.age}
                                    </TableCell>
                                    <TableCell className="px-0" align="left" colSpan={2}>
                                        {admin.isActive === '1' ? <Button onClick={() => { openEnabledModal(admin) }} className={classes.button}> Enabled </Button>
                                            : <Button onClick={() => { openDisabledModal(admin) }}> Disabled </Button>}


                                    </TableCell>
                                    <TableCell className="px-0" colSpan={1}>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => {
                                            setAnchorEl(e.currentTarget);
                                            handleClick(admin)
                                        }}>
                                            <Icon>edit</Icon>

                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={() => handleEdit(admin, index)}>Edit</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}

const mapStateToProp = (state, props) => {

    return {
        admins: state.admin.admins,
        loading: state.admin.loading,
    };
}
const dispatchToProps = (dispatch) => ({
    updateAdmin: (body, history) => {
        dispatch(updateAdmin(body, history));
    },
    fetchAdmins: () => {
        dispatch(fetchAdmins());
    },
    addAdminUser: (body, history) => {
        dispatch(addAdminUser(body, history));
    },
    addModeratorUser: (body, history) => {
        dispatch(addModerator(body, history));
    },
    enableUser: (body, history) => {
        dispatch(enableUser(body, history))
    },
    disableUser: (body, history) => {
        dispatch(disableUser(body, history))
    }

});
export default connect(mapStateToProp, dispatchToProps)(Admin);