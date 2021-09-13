import React, { useState,useEffect } from 'react';

import {
  Grid,
  Card,
  Icon,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { fetchDashboard } from 'app/redux/actions/DashboardAction';
import { connect } from 'react-redux';

const StatCards = (props) => {
  useEffect(() => {
  props.fetchDashboardStats();
}, []);

  return (
    <Grid container spacing={3} className="mb-24">
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                // color: theme.palette.primary.main
              }}
            >
              group
            </Icon>
            <div className="ml-12">
              <small className="text-muted">New Contacts</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">{props.dashboardStats.currentDay}</h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
          <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                // color: theme.palette.primary.main
              }}
            >
              group
            </Icon>
            <div className="ml-12">
              <small className="text-muted">This week Contacts</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">{props.dashboardStats.previousDays}</h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme.palette.primary.main
              }}
            >
              store
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Inventory Status</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">
                8.5% Stock Surplus
              </h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid> */}
      {/* <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme.palette.primary.main
              }}
            >
              shopping_cart
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Orders to deliver</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">
                305 Orders
              </h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid> */}
    </Grid>
  );
};

// export default StatCards;

const mapStateToProp = (state, props) => {
  return {
      dashboardStats: state.dashboard.dashboard,
      loading: state.blog.loading,
  };
}
const dispatchToProps = (dispatch) => ({
  fetchDashboardStats: () => {
      dispatch(fetchDashboard());
  },

});

export default connect(mapStateToProp, dispatchToProps)(StatCards);
