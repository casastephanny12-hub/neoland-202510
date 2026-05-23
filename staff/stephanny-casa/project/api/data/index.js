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
import { savePost } from './savePost.js'
import { unsavePost } from './unsavePost.js'
import { findSavedPostsByUserId } from './findSavedPostsByUserId.js'
import { findPostsByUserId } from './findPostsByUserId.js'
import { insertComment } from './insertComment.js'
import { findCommentsByPostId } from './findCommentsByPostId.js'
import { deleteComment } from './deleteComment.js'
import { findCommentById } from './findCommentById.js'
import { updateComment } from './updateComment.js'

export const data = {
    insertUser,
    findUserByEmail,
    findUserByUsername,
    findUserById,
    insertPost,
    findAllPost,
    deletePost,
    updatePost,
    findPostById,
    savePost,
    unsavePost, 
    findSavedPostsByUserId,
    findPostsByUserId, 
    insertComment,
    findCommentsByPostId,
    deleteComment,
    findCommentById,
    updateComment
}