import { logic } from '../../logic/index.js'

export const getPostHandler = (req, res, next) => {
    try {

        const { userId, params: { postId } } = req

        logic.getPost(userId, postId)
            .then(post => res.json(post))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}