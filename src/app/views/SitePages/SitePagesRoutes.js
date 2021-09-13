import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const SitePages = MatxLoadable({
  loader: () => import("./SitePages")
})

const sitePagesRoutes = [
  {
    path: "/pageList",
    component: SitePages,
    auth: authRoles.admin
  }
];

export default sitePagesRoutes;
 