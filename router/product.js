import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const routerProduct = Router()

routerProduct.get('/products', checkAuth, list)
routerProduct.get('/products/:id', checkAuth, read)
// routerProduct.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
routerProduct.post('/products', checkAuth, create)
routerProduct.delete('/products/:id', checkAuth, remove)
routerProduct.put('/products/:id', checkAuth, update)

routerProduct.param('userId', userById)

export default routerProduct