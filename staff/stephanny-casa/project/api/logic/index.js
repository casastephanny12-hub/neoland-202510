export * from './models/index.js'

import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUser } from './getUser.js'

import { createPost } from './createPost.js'
import { getPosts } from './getPosts.js'
import { getPost } from './getPost.js'
import { deletePost } from './deletePost.js'
import { modifyPost } from './modifyPost.js'
import { getSavedPosts } from './getSavedPosts.js'

export const logic = {
    registerUser, 
    authenticateUser,
    getUser,
    createPost,
    getPosts,
    getPost,
    deletePost,
    modifyPost,
    getSavedPosts
}
