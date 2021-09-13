import React, { useState,useEffect } from 'react';
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Grid
} from "@material-ui/core";
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fetchSubsList } from 'app/redux/actions/SubscriptionActions';

function Subscriptions(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalTile, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');

  useEffect(() => {
    props.fetchSubsList();
}, []);

  const getExport = (contactData) => {
    const logsView = () => {
      return (
        <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
         
            <strong> Full Name:</strong>  {contactData.name}
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
           <strong>Email:</strong>{contactData.email}
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
            <strong>  Phone:</strong>   {contactData.phone}
         
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
      
          <strong>  Subject:</strong>  {contactData.subject}
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
      
          <strong> Message:</strong>   {contactData.message}
            </Grid> 
            </Grid>
      )
    }
    setModalTitle('Contact Report');
    setModalBody(logsView);
    setShowModal(true);
  }
  const subList = props.subList;


  return (
    <div>
      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{modalTile}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowModal(false)} color="primary">
            Close
  </Button>

        </DialogActions>
      </Dialog>
      <Card elevation={3} className="pt-20 mb-24">
        <div className="card-title px-24 mb-12">Subscription List</div>
        <div className="overflow-auto">
          <Table className="product-table">
            <TableHead>
              <TableRow>
                <TableCell className="px-0" colSpan={3}>
                  Email
                </TableCell>
                <TableCell className="px-0" colSpan={3}>
                  Subscription Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subList.map((sub, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0 capitalize" colSpan={3} align="left">
                    <div className="flex flex-middle">

                      <p className="m-0 ml-8">{sub.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="left" colSpan={3}>
                    {new Date(sub.date).toLocaleDateString()}
                  </TableCell>

                  {/* <TableCell className="px-0" align="left" colSpan={2}>
                    {product.subject}
                  </TableCell>
                  <TableCell className="px-0" align="left" colSpan={2}>
                    {product.phone}
                  </TableCell> */}
                  {/* <TableCell className="px-0" align="left" colSpan={2}>
                    {product.message}
                  </TableCell> */}
                  {/* <TableCell className="px-0" colSpan={1}>
                    <IconButton onClick={() => getExport(product)}>
                      <Icon color="primary">visibility</Icon>
                    </IconButton >
                  </TableCell> */}
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
      subList: state.subs.subs,
      loading: state.blog.loading,
  };
}
const dispatchToProps = (dispatch) => ({
  fetchSubsList: () => {
      dispatch(fetchSubsList());
  },

});

export default connect(mapStateToProp, dispatchToProps)(Subscriptions);