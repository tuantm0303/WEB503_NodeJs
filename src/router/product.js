import { Router } from "express";
import {
  create,
  list,
  paginateResults,
  productItem,
  read,
  remove,
  search,
  sort,
  update,
} from "../app/controllers/product";
import { userById } from "../app/controllers/user";
import {
  checkAuth,
  isAdmin,
  isAuth,
  requireSignin,
} from "../middlewares/checkAuth";

const routerProduct = Router();

routerProduct.get("/products", checkAuth, list);
routerProduct.get("/products/:slug", checkAuth, read);
routerProduct.post(
  "/products/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  checkAuth,
  create
);
routerProduct.delete(
  "/products/:id/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  checkAuth,
  remove
);
routerProduct.put(
  "/products/:id/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  checkAuth,
  update
);
routerProduct.get("/search", search);
routerProduct.get("/product", paginateResults);
routerProduct.get("/filter", sort);
routerProduct.get("/products?_expand=", productItem);

routerProduct.param("userId", userById);

export default routerProduct;
