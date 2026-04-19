import { logic } from '../../logic/index.js'

export const savePostHandler = (req, res, next) => {
    try {
        const { userId, params: { postId } } = req

        logic.savePost(userId, postId)
        .then(post => res.status(200).send())
        .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}