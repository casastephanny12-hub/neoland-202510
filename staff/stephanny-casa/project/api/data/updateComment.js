import { SystemError } from 'com'
import { CommentModel } from '../mongoose/index.js'

export function updateComment(commentData) {
    return CommentModel.updateOne({ _id: commentData.id }, { $set: commentData })
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}