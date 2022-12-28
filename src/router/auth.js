import { Router } from "express";
import {
  list,
  read,
  remove,
  signin,
  signout,
  signup,
  update,
} from "../app/controllers/auth";
import { userById } from "../app/controllers/user";
import {
  checkAuth,
  isAdmin,
  isAuth,
  requireSignin,
} from "../middlewares/checkAuth";

const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.delete("/signout/:id", signout);
userRouter.post("/signin", signin);
userRouter.get("/users", list);
userRouter.get("/users/:id", read);
userRouter.patch(
  "/users/:id/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  checkAuth,
  update
);
userRouter.delete("/users/:id", remove);

userRouter.param("userId", userById);

export default userRouter;
