import { SystemError } from 'com'
import { CommentModel } from '../mongoose/index.js'

export function deleteComment(commentId) {
    return CommentModel.deleteOne({ _id: commentId })
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}