import { Router } from "express";
import { create, list, read, remove } from "../controllers/category";
import { update } from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth";

const routerCategory = Router()

routerCategory.get('/categories', checkAuth, list)
routerCategory.get('/category/:id', checkAuth, read)
routerCategory.post('/categories', checkAuth, create)
routerCategory.put('/category/:id', checkAuth, update)
routerCategory.get('/categor/:id', checkAuth, remove)

export default routerCategory