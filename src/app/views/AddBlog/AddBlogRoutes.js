import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const AddBlog = MatxLoadable({
  loader: () => import("./AddBlog")
})

const addBlogRoutes = [
  {
    path: "/addBlog",
    component: AddBlog,
    auth: authRoles.admin
  }
];

export default addBlogRoutes;
 