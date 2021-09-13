import React, { useState, useEffect } from 'react';
import { RichTextEditor, Breadcrumb } from "matx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
    Button,
    Icon,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { getPageSection, updatePageSection } from 'app/redux/actions/sitePagesActions';
import { Redirect, Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

function EditViewPageSection(props) {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const { pageData } = props.location;
    const classes = useStyles();
    const [content, setContent] = useState(``
    );
    const [title, setTitle] = useState('');
    const [backGroundImg, setBackGroundImg] = useState('');

    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        props.getPageSectionData(pageData?.id)
    }, []);


    const handleContentChange = contentHtml => {

        setContent(contentHtml);
    };
    useEffect(() => {
        setContent(props?.pageSectionData[0]?.content);
        setTitle(props?.pageSectionData[0]?.title);
        setBackGroundImg(props?.pageSectionData[0]?.backgroundImage)
    }, [props?.pageSectionData?.[0]]);

    if (!pageData) {
        return <Redirect to="/pageList" />
    }
  
    const handleSubmit = (e) => {
        const payload = {
            backgroundImage: backGroundImg,
content: content,
title: title,
id: pageData?.id
        }
        props.updatePageSection(payload, props.history)

    }

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
                        { name: "Edit Page Section" }
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
            { props.loading ? <CircularProgress /> : <ValidatorForm
                useRef="form"
                onSubmit={handleClickOpen}
                onError={errors => null}
            >
                <TextValidator
                    className="mb-16 w-100"
                    label="Title"
                    type="text"
                    name="title"
                    onChange={(e) => {setTitle(e.target.value)}}
                    value={title}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                />

             
                <RichTextEditor
                    content={content}
                    handleContentChange={handleContentChange}
                    placeholder="insert text here..."
                />
                        <div className="d-flex align-items-center home-image-preview-wrapper">
                        <p>Background Image</p>
                 <img 
      src={backGroundImg}
      alt="new"
      />
      </div>
                <div>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>submit</Icon>
                        <span className="pl-8 capitalize">Send</span>
                    </Button>
                    <Button cvariant="contained" >
                        <Link
                            to={{
                                pathname: "/pageList",

                            }}>
                            <span className="pl-8 capitalize">Cancel</span>

                        </Link>
                    </Button>
                </div>
            </ValidatorForm>}

        </div>
    )
}
const mapStateToProp = (state, props) => {

    return {
        loading: state.sitePages.loading,
        pageSectionData: state.sitePages.pageSectionData
    };
}
const dispatchToProps = (dispatch) => ({

    getPageSectionData: (id) => {
        dispatch(getPageSection(id))
    },
    updatePageSection: ( body, history) => {
        dispatch(updatePageSection( body, history))
    }

});
export default connect(mapStateToProp, dispatchToProps)(EditViewPageSection);