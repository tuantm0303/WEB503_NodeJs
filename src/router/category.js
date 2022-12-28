import { Router } from "express";
import {
  create,
  list,
  read,
  readProOnCate,
  remove,
  update,
} from "../app/controllers/category";
import { userById } from "../app/controllers/user";
import {
  checkAuth,
  isAdmin,
  isAuth,
  requireSignin,
} from "../middlewares/checkAuth";

const routerCategory = Router();

routerCategory.get("/categories", checkAuth, list);
routerCategory.get("/categories/:id", checkAuth, readProOnCate);
routerCategory.get("/category/:id", checkAuth, read);
routerCategory.post(
  "/categories/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  checkAuth,
  create
);
routerCategory.put(
  "/categories/:id/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  checkAuth,
  update
);
routerCategory.delete(
  "/categories/:id/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  checkAuth,
  remove
);

routerCategory.param("userId", userById);

export default routerCategory;
