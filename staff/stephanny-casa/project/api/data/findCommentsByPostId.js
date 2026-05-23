import { SystemError } from 'com'
import { CommentModel } from '../mongoose/index.js'
import { CommentData } from './models/index.js'

export function findCommentsByPostId(postId) {
    return CommentModel.find({ post: postId }).populate('user', 'username')
        .catch(error => { throw new SystemError(error.message) })
        .then(commentModels => commentModels.map(commentModel => {
            const { id, user, text, commentedAt} = commentModel

            return new CommentData(id, user.id, postId, user.username, text, commentedAt )
        }) )
}