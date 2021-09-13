import React, { useState,useEffect } from 'react';
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
import { fetchEmailTemplateList,sendEmailService } from 'app/redux/actions/SendEmailActions';


function SendEmail(props) {
    useEffect(() => {
        props.fetchEmailList();
    }, []);

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const [content, setContent] = useState(`<h1>ICV | ICV Admin admin</h1><p><a 
     target="_blank"><strong>DevEgret</strong></a></p><p><br></p><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>`
    );
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const handleContentChange = contentHtml => {

        setContent(contentHtml);
    };
    const handleChangeTo = (e) => {
        setTo(e.target.value);
    }
    const handleSubmit = (e) => {  
        const emailOb = {
            to: to,
            title: from,
            content: content,
        }

        props.sendEmailService(emailOb, props.history)
    }
    const handleChangeFrom = (e) => {
        setFrom(e.target.value);
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: "Send Email" }
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
                useRef="form"
                onSubmit={handleClickOpen}
                onError={errors => null}
            >

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">To</InputLabel>
                    <Select
                        native
                        value={to}
                        onChange={handleChangeTo}
                        inputProps={{
                            name: 'to',
                            id: 'age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="all">All</option>

                          {props.emailList.map((sub, index) => (
                        <option aria-label="None" value={sub.value} key={index}>{sub.label}</option>
                        
                        ))}
                        {/* <option value="abcd@gmail.com">abcd@gmail.com</option>
                        <option value="xyz@yahoo.com">xyz@yahoo.com</option>
                        <option value="pqrs@hotmail.com">pqrs@hotmail.com</option> */}
                    </Select>
                </FormControl>
                <TextValidator
                    className="mb-16 w-100"
                    label="Title"
                    onChange={handleChangeFrom}
                    type="text"
                    name="from"
                    value={from}
                    errorMessages={["this field is required", "Title is not valid"]}
                />
                <RichTextEditor
                    content={content}
                    handleContentChange={handleContentChange}
                    placeholder="insert text here..."
                />
                <div>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>submit</Icon>
                        <span className="pl-8 capitalize">Send</span>
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
        emailList: state.sendemail.templateList,
        loading: state.blog.loading,
    };
  }
  const dispatchToProps = (dispatch) => ({
    fetchEmailList: () => {
        dispatch(fetchEmailTemplateList());
    },
    sendEmailService: (body, history) => {
        dispatch(sendEmailService(body, history));
    },
  
  });
  
  export default connect(mapStateToProp, dispatchToProps)(SendEmail);