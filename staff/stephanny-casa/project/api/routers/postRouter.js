import { Router } from "express";
import { authMiddleware } from "../middlewares/index.js";

import {
    createPostHandler,
    getPostHandler,
    deletePostHandler,
    modifyPostHandler
} from './handlers/index.js'

export const postRouter = new Router()

postRouter.post('', authMiddleware, createPostHandler)
postRouter.get('', authMiddleware, getPostHandler)
postRouter.delete('/:postId', authMiddleware, deletePostHandler)
postRouter.patch('/:postId', authMiddleware, modifyPostHandler)