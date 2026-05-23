import { validate, ExistenceError, OwnershipError } from 'com'
import { data } from '../data/index.js'

export function modifyComment(userId, commentId, text) {
    validate.id(userId, 'userId')
    validate.id(commentId, 'commentId')
    validate.text(text, 'text')

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new ExistenceError('user not found')

            return data.findCommentById(commentId)
        })
        .then(commentData => {
            if (!commentData) throw new ExistenceError('comment not found')

            if (commentData.userId !== userId) throw new OwnershipError('user not owner of comment')

            return data.updateComment({ id: commentId, text })
        })
}