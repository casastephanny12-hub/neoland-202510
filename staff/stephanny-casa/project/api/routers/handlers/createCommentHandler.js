import { logic } from '../../logic/index.js'

export const createCommentHandler = (req, res, next) => {
    try {
        const { userId, params: {postId}, body: { text } } = req

        logic.createComment(userId, postId, text)
        .then(() => res.status(201).send())
        .catch(error => next(error))
    } catch(error){
        next(error)
    }
}