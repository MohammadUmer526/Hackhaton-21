import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";

import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";


import sendEmailRoutes from "./views/SendEmail/SendEmailRoutes";
import sitePagesRoutes from "./views/SitePages/SitePagesRoutes";
import SubscriptionsRoutes from "./views/SubscriptionList/SubscriptionListRoutes";
import EditViewPageSectionRoutes from "./views/EditViewPageSection/EditViewPageSectionRoutes";
import contactUsRoutes from './views/ContactUs/ContactUsRoutes';

import adminRoutes from './views/Admin/AdminRoutes';
import changePassRoutes from './views/ChangePassword/ChangePasswordRoutes';
import changeEmailRoutes from './views/ChangeEmail/ChangeEmailRoutes';
import blogRoutes from './views/Blog/BlogRoutes';
import editBlogRoutes from './views/EditBlog/EditBlogRoutes';
import addBlogRoutes from './views/AddBlog/AddBlogRoutes';

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...sendEmailRoutes,
  ...sitePagesRoutes,
  ...contactUsRoutes,
  ...blogRoutes,
  ...editBlogRoutes,
  ...EditViewPageSectionRoutes,
  ...adminRoutes,
  ...addBlogRoutes,
  ...changePassRoutes,
  ...changeEmailRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...dragAndDropRoute,
  ...SubscriptionsRoutes,
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,
  ...errorRoute
];

export default routes;
