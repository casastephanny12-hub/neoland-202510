import { data } from '../data/index.js'
import { ExistenceError, OwnershipError, validate } from 'com'

export function deleteComment(userId, commentId) {
    validate.id(userId, 'userId')
    validate.id(commentId, 'commentId')

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new ExistenceError('user not found')

            return data.findCommentById(commentId)
        })
        .then(commentData => {
            if (!commentData) throw new ExistenceError('comment not found')
            if (commentData.userId !== userId) throw new OwnershipError('user not owner of comment')

            return data.deleteComment(commentId)
        })
}