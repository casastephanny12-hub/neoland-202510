import { logic } from '../../logic/index.js'

export const modifyCommentHandler = (req, res, next) => {
    try {
        const { userId, params: { commentId }, body: { text } } = req

        logic.modifyComment(userId, commentId, text)
            .then(post => res.status(200).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}