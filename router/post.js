import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/post";
import { checkAuth } from "../middlewares/checkAuth";

const routerPost = Router()

routerPost.get('/posts', checkAuth, list)
routerPost.get('/post/:id', checkAuth, read)
routerPost.post('/posts', checkAuth, create)
routerPost.delete('/post/:id', checkAuth, remove)
routerPost.put('/post/:id', checkAuth, update)

export default routerPost