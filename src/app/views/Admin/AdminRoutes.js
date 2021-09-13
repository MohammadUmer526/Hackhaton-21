import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Admin = MatxLoadable({
  loader: () => import("./Admin")
})

const adminRoutes = [
  {
    path: "/admin",
    component: Admin,
    auth: authRoles.admin
  }
];

export default adminRoutes;
 