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
} from "@material-ui/core";
import history from "history.js";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchBlogs } from '../../redux/actions/BlogActions';
import CircularProgress from '@material-ui/core/CircularProgress';

function Blog(props) {
    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(-1),
            float: "right;",

        },
        input: {
            display: "none"
        },

    }));

    const classes = useStyles();

    useEffect(() => {
        props.fetchBlogs();
    }, []);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [title, setTitleEdit] = useState('');
    const [link, setLinkEdit] = useState('');
    const [blogList] = props.blogs && props.blogs;
  
    const handleChangeEdit = event => {
        event.persist();
        const { value, name } = event.target;
        switch (name) {
            case 'title':
                setTitleEdit(value);
                break;

            case 'link':
                setLinkEdit(value);
                break;


            default:
                break;
        }
    };

    const handleSubmitEdit = event => {
        setShowModalEdit(false);

    };

    const hanldeCloseModalEdit = () => {
        setShowModalEdit(false);
        setTitleEdit('');
        setLinkEdit('');
    }
    const AddBlog = () =>{
        history.push({
            pathname: "/addBlog"
          });
    }
    return (
        <div>

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
                                        label="Title"
                                        onChange={handleChangeEdit}
                                        type="text"
                                        name="title"
                                        value={title}
                                        validators={[
                                            "required",
                                            "minStringLength: 4",
                                            "maxStringLength: 9"
                                        ]}
                                        errorMessages={["this field is required"]}
                                    />
                                    <TextValidator
                                        className="mb-16 w-100"
                                        label="Link"
                                        onChange={handleChangeEdit}
                                        type="text"
                                        name="link"
                                        value={link}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />

                                </Grid>

                            </Grid>
                            <Button color="primary" variant="contained" type="submit">

                                <span className="pl-8 capitalize">Add</span>
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


            {/* <Button className={classes.button}>Add Blog</Button> */}
            { props.loading && props && props.blogs ? <CircularProgress /> : <Card elevation={3} className="pt-20 mb-24">
            <Button variant="contained" onClick={AddBlog}  className={classes.button}>
                    Add Blog
                    {/* <Link
                                            to={{
                                                pathname: "/editBlog",
                                               }}>

                                        </Link> */}
        </Button>
                <div className="card-title px-24 mb-12">Blog</div>

                <div className="overflow-auto">
                    <Table className="product-table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="px-24" colSpan={4}>
                                    Title
                  </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Link
                  </TableCell>
                                <TableCell className="px-0" colSpan={1}>
                                    Actions
                  </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.blogs && props.blogs.map((blog, index) => (
                                <TableRow key={index}>
                                    <TableCell className="px-0 capitalize" colSpan={4} align="left">
                                        <div className="flex flex-middle">
                                            <p className="m-0 ml-8">{blog.title}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                                        {blog.link}
                                    </TableCell>

                                    <TableCell>
                                        <Link
                                            to={{
                                                pathname: "/editBlog",
                                                blog,
                                            }}>
                                            <Icon>edit</Icon>

                                        </Link>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>}
        </div>
    );
}
const mapStateToProp = (state, props) => {

    return {
        blogs: state.blog.blogs,
        loading: state.blog.loading,
    };
}
const dispatchToProps = (dispatch) => ({
    fetchBlogs: () => {
        dispatch(fetchBlogs());
    },

});

export default connect(mapStateToProp, dispatchToProps)(Blog);