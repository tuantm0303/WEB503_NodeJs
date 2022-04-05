import { Router } from "express"
import { list, remove, signin, signout, signup } from "../controllers/auth"

const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.delete('/signout/:id', signout)
userRouter.post('/signin', signin)
userRouter.get('/users', list)
userRouter.delete('/users/:id', remove)

export default userRouter