import { Router } from "express";
import { authMiddleware } from "../middlewares/index.js";

import {
    createPostHandler,
    getPostHandler,
    getPostsHandler,
    deletePostHandler,
    modifyPostHandler
} from './handlers/index.js'

export const postRouter = new Router()

postRouter.post('', authMiddleware, createPostHandler)
postRouter.get('/:postId', authMiddleware, getPostHandler)
postRouter.get('', authMiddleware, getPostsHandler)
postRouter.delete('/:postId', authMiddleware, deletePostHandler)
postRouter.patch('/:postId', authMiddleware, modifyPostHandler)