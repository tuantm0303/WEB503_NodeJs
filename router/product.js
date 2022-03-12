import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth";

const routerProduct = Router()

routerProduct.get('/products', checkAuth, list)
routerProduct.get('/product/:id', checkAuth, read)
routerProduct.post('/products', checkAuth, create)
routerProduct.delete('/product/:id', checkAuth, remove)
routerProduct.put('/product/:id', checkAuth, update)

export default routerProduct