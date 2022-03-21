import { Router } from "express";
import { list, remove, signIn, signUp, update } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth";

const routerUser = Router()

routerUser.get('/users', checkAuth, list)
routerUser.get('/user/:id', checkAuth, signIn)
routerUser.post('/users', checkAuth, signUp)
routerUser.delete('/user/:id', checkAuth, remove)
routerUser.put('/user/:id', checkAuth, update)

export default routerUser