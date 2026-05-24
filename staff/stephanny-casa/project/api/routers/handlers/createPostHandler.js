import { logic } from '../../logic/index.js'

export const createPostHandler = (req, res, next) => {
    try {
        const { userId, body: { text, url } } = req

        logic.createPost(userId, text, url)
            .then(() => res.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
} 