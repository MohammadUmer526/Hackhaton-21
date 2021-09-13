import React, { useState, useRef } from 'react';
import { Breadcrumb } from "matx";
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
import { Link } from "react-router-dom";
import { fetchBlogById, addBlog } from 'app/redux/actions/BlogActions';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Editor } from '@tinymce/tinymce-react';

function AddBlog(props) {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const htmlEditor = useRef(null);
    const [open, setOpen] = React.useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(
        null
    );
    const [content, setContent] = useState(''
    );


    const handleChange = event => {
        // event.persist();
        const { value, name } = event.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;

            case 'link':
                setLink(value);
                break;

            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        const blogObj = {
            title: title,
            link: link,
            content: content,
            coverImage: image
        }
        props.addBlog(blogObj, props.history)
        handleClose(true);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);

        reader.onloadend = (e) => {
            setImage(reader.result);
        }
        const newFile = new FileReader();
    }
    const delteImage = () => {
        setShowPreview(false);
        setImage(null)
    }
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: "Add Blog" }
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
                    value={title}
                    name='title'
                    onChange={handleChange}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                />
                <TextValidator
                    className="mb-16 w-100"
                    label="Link"
                    onChange={handleChange}
                    type="text"
                    name='link'
                    value={link}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                />

                {image === null && !showPreview
                    ?
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
  <input
                            type="file"
                            onChange={handleFileChange}
                            required
                        />
                    </Button> :

                    <div className="d-flex align-items-center home-image-preview-wrapper">
                        <p>Image 2</p>
                        <img src={image} alt="" />
                        <Icon className="pl-5" onClick={delteImage} >delete</Icon>
                    </div>
                }

                <Editor tinymceScriptSrc="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.7.1/tinymce.min.js"
                    onEditorChange={(val) => setContent(val)}
                    onInit={(evt, editor) => htmlEditor.current = editor}
                    value={content}
                    required
                    init={{
                        height: 500,
                        branding: false,
                        directionality: "ltr",
                        plugins: [
                            'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        menubar: 'file edit view insert format tools table help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <div>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>submit</Icon>
                        <span className="pl-8 capitalize">Add</span>
                    </Button>
                    <Button cvariant="contained" >

                        <Link
                            to={{
                                pathname: "/Blog",

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
    };
}
const dispatchToProps = (dispatch) => ({
    getBlogById: (blogId) => {
        dispatch(fetchBlogById(blogId));
    },

    addBlog: (body, history) => {
        dispatch(addBlog(body, history));
    },
});
export default connect(mapStateToProp, dispatchToProps)(AddBlog);