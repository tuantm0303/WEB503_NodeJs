import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const routerProduct = Router()

routerProduct.get('/products', checkAuth, list)
routerProduct.get('/product/:id', checkAuth, read)
routerProduct.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
routerProduct.delete('/product/:id', checkAuth, remove)
routerProduct.put('/product/:id', checkAuth, update)

routerProduct.param('userId', userById)

export default routerProduct