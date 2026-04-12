export * from './models/index.js'

import { insertUser } from './insertUser.js'
import { findUserByEmail } from './findUserByEmail.js'
import { findUserByUsername } from './findUserByUsername.js'
import { findUserById } from './findUserById.js'


import { insertPost } from './insertPost.js'
import { findAllPost } from './findAllPost.js'
import { deletePost } from './deletePost.js'
import { updatePost } from './updatePost.js'
import { findPostById } from './findPostById.js'

export const data = {
    insertUser,
    findUserByEmail,
    findUserByUsername,
    findUserById,
    insertPost,
    findAllPost,
    deletePost,
    updatePost,
    findPostById
}