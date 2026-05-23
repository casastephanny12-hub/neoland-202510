import { logic } from '../../logic/index.js'

export const deleteCommentHandler = (req, res, next) => {
    try {

        const {userId, params: {commentId}} = req

        logic.deleteComment(userId, commentId)
        .then(() => res.status(204).send())
        .catch(error => next(error))
    } catch(error){
        next(error)
    }
}
