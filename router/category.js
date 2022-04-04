import { Router } from "express";
import { create, list, read, remove } from "../controllers/category";
import { update } from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth";

const routerCategory = Router()

routerCategory.get('/categories', checkAuth, list)
routerCategory.get('/categories/:id', checkAuth, read)
routerCategory.post('/categories', checkAuth, create)
routerCategory.put('/categories/:id', checkAuth, update)
routerCategory.delete('/categories/:id', checkAuth, remove)

export default routerCategory