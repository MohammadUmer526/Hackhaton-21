import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Blog = MatxLoadable({
  loader: () => import("./Blog")
})

const blogRoutes = [
  {
    path: "/blog",
    component: Blog,
    auth: authRoles.admin
  }
];

export default blogRoutes;
 