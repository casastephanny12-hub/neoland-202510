import { logic } from "../../logic/index.js"

export const modifyPostHandler = (req, res, next) => {
    try {

        const { userId, params: { postId }, body: { text, url } } = req

        logic.modifyPost(userId, postId, text, url)
        .then(post => res.status(200).send())
        .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}