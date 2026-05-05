import { Router } from "express";
import { authMiddleware } from "../middlewares/index.js";

import {
    createPostHandler,
    getPostHandler,
    getPostsHandler,
    deletePostHandler,
    modifyPostHandler,
    savePostHandler, 
    unsavePostHandler,
    getSavedPostHandler,
    getUserPostHandler
} from './handlers/index.js'

export const postRouter = new Router()

postRouter.post('', authMiddleware, createPostHandler)
postRouter.get('/saved', authMiddleware, getSavedPostHandler)
postRouter.get('/user', authMiddleware, getUserPostHandler)
postRouter.get('/:postId', authMiddleware, getPostHandler)
postRouter.get('', authMiddleware, getPostsHandler)
postRouter.delete('/:postId', authMiddleware, deletePostHandler)
postRouter.patch('/:postId', authMiddleware, modifyPostHandler)
postRouter.post('/:postId/save', authMiddleware, savePostHandler )
postRouter.delete('/:postId/save', authMiddleware, unsavePostHandler)

