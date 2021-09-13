import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const ContactUs = MatxLoadable({
  loader: () => import("./ContactUs")
})

const contactUsRoutes = [
  {
    path: "/contactUs",
    component: ContactUs,
    auth: authRoles.admin
  }
];

export default contactUsRoutes;
 