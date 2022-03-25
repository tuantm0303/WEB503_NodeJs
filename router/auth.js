import { Router } from "express"
import { signin, signup } from "../controllers/auth"

const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.get('/signin', signin)

export default userRouter