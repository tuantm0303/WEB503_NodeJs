import { Router } from "express";
import { create, list, read, remove } from "../controllers/category";
import { update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const routerCategory = Router()

routerCategory.get('/categories', checkAuth, list)
routerCategory.get('/categories/:id', checkAuth, read)
routerCategory.post('/categories/:userId', requireSignin, isAuth, isAdmin, checkAuth, create)
routerCategory.put('/categories/:id', checkAuth, update)
routerCategory.delete('/categories/:id/:userId', requireSignin, isAuth, isAdmin, checkAuth, remove)

routerCategory.param('userId', userById)

export default routerCategory