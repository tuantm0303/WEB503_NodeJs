import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth";

const routerUser = Router()

routerUser.get('/users', checkAuth, list)
routerUser.get('/user/:id', checkAuth, read)
routerUser.post('/users', checkAuth, create)
routerUser.delete('/user/:id', checkAuth, remove)
routerUser.put('/user/:id', checkAuth, update)

export default routerUser