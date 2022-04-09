import { Router } from "express";
import { create, list, read, remove, search, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const routerProduct = Router()

routerProduct.get('/products', checkAuth, list)
routerProduct.get('/products/:id', checkAuth, read)
routerProduct.post('/products/:userId', requireSignin, isAuth, isAdmin, checkAuth, create)
routerProduct.delete('/products/:id/:userId', requireSignin, isAuth, isAdmin, checkAuth, remove)
routerProduct.put('/products/:id/:userId', requireSignin, isAuth, isAdmin, checkAuth, update)
routerProduct.get('/search', search)

routerProduct.param('userId', userById)

export default routerProduct