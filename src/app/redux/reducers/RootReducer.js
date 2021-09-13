import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import BlogReducers from './blogReudcers';
import contactusReducers from "./contactusReducers";
import sendEmailReducers from './sendEmailReducer';
import AdminReducers from './AdminReducers';
import subscriptionReducers from "./SubscriptionReducers";
import dashboardReducers from "./dashboardReducer";
import dashboardGraphReducers from "./dashboardGraphReducer";
import SettingsReducers from './SettingsRedcuers';
import sitePagesReducers from './sitePagesReducers';

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  blog: BlogReducers,
  contactus:contactusReducers,
  sendemail:sendEmailReducers,
  admin: AdminReducers,
  subs:subscriptionReducers,
  dashboard:dashboardReducers,
  dashboardGraph:dashboardGraphReducers,
  admin: AdminReducers,
  settings: SettingsReducers,
  sitePages: sitePagesReducers
});

export default RootReducer;
