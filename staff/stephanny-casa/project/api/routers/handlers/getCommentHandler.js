import { logic } from '../../logic/index.js'

export const getCommentHandler = (req, res, next) => {
    try {
        const { params: {postId} } = req

        logic.getComments(postId)
            .then(comment => res.json(comment))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}