import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const SendEmail = MatxLoadable({
  loader: () => import("./SendEmail")
})

const sendEmailRoutes = [
  {
    path: "/sendEmail",
    component: SendEmail,
    auth: authRoles.admin
  }
];

export default sendEmailRoutes;
 