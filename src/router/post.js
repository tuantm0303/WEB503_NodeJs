import { Router } from "express";
import { create, list, read, remove, update } from "../app/controllers/post";
import {
  checkAuth,
  isAdmin,
  isAuth,
  requireSignin,
} from "../middlewares/checkAuth";

const routerPost = Router();

routerPost.get("/posts", checkAuth, list);
routerPost.get("/post/:id", checkAuth, read);
routerPost.post("/posts", checkAuth, create);
routerPost.post("/posts/:userId", requireSignin, isAuth, isAdmin, create);
routerPost.delete("/post/:id", checkAuth, remove);
routerPost.put("/post/:id", checkAuth, update);

export default routerPost;
