export * from './models/index.js'

import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'

import { createPost } from './createPost.js'
import { getPosts } from './getPosts.js'
import { deletePost } from './deletePost.js'
import { modifyPost } from './modifyPost.js'

export const logic = {
    registerUser, 
    authenticateUser,
    createPost,
    getPosts,
    deletePost,
    modifyPost
}
