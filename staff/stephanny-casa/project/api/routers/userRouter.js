import { Router } from 'express'
import { authMiddleware } from '../middlewares/index.js'

import {
    registerUserHandler,
    authenticateUserHandler
} from './handlers/index.js'


export const userRouter = new Router()

userRouter.post('', registerUserHandler)
userRouter.post('/auth', authenticateUserHandler)