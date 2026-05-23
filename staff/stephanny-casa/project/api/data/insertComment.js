import { SystemError } from 'com'
import { CommentModel } from '../mongoose/index.js'

export function insertComment(commentData) {
    const { userId, postId, text } = commentData

    const commentModel = new CommentModel({ user: userId, post: postId, text })

    return commentModel.save()
        .catch(error => { throw new SystemError(error.message) })
        .then(() => { })
}