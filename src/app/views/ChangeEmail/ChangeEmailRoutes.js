import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const ChangeEmail = MatxLoadable({
  loader: () => import("./ChangeEmail")
})

const changeEmailRoutes = [
  {
    path: "/changeEmail",
    component: ChangeEmail,
    auth: authRoles.admin
  }
];

export default changeEmailRoutes;
 