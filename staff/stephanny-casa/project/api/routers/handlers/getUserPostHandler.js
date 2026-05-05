import { logic } from '../../logic/index.js'

export const getUserPostHandler = (req, res, next) => {
    try {
        const { userId } = req

        logic.getUserPosts(userId)
            .then(posts => res.json(posts))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}