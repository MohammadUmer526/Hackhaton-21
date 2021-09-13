import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const ChangePassword = MatxLoadable({
  loader: () => import("./ChangePassword")
})

const changePassRoutes = [
  {
    path: "/changePass",
    component: ChangePassword,
    auth: authRoles.admin
  }
];

export default changePassRoutes;
 