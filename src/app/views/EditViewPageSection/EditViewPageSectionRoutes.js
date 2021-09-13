import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const EditViewPageSection = MatxLoadable({
  loader: () => import("./EditViewPageSection")
})

const EditViewPageSectionRoutes = [
  {
    path: "/editPageSectiion",
    component: EditViewPageSection,
    auth: authRoles.admin
  }
];

export default EditViewPageSectionRoutes;
 