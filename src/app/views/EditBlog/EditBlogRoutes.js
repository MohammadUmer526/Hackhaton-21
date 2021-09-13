import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const EditBlog = MatxLoadable({
  loader: () => import("./EditBlog")
})

const editBlogRoutes = [
  {
    path: "/editBlog",
    component: EditBlog,
    auth: authRoles.admin
  }
];

export default editBlogRoutes;
 