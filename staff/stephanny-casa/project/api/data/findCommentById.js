import { SystemError } from 'com'
import { CommentModel } from '../mongoose/index.js'
import { CommentData } from './models/index.js'

export function findCommentById(commentId) {
    return CommentModel.findById(commentId)
        .catch(error => { throw new SystemError(error.message) })
        .then(commentModel => {
            if (!commentModel) return null

            const {id, user, text, commentedAt} = commentModel

            return new CommentData(id, user.toString(), null, null, text, commentedAt)
        })
}