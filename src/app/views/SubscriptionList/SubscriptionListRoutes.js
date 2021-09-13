import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Subscriptions= MatxLoadable({
  loader: () => import("./SubscriptionList")
})

const SubscriptionsRoutes = [
  {
    path: "/SubscriptionList",
    component: Subscriptions,
    auth: authRoles.admin
  }
];

export default SubscriptionsRoutes;
 