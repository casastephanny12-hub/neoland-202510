import { logic } from '../../logic/index.js'

export const getSavedPostHandler = (req, res, next) => {
    try {
        const { userId } = req

        logic.getSavedPosts(userId)
            .then(posts => res.json(posts))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}