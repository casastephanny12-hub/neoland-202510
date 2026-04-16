 import { logic } from "../../logic/index.js"

export const getPostsHandler = (req, res, next)  => {
    try {

        const { userId } = req

        logic.getPosts(userId)
        .then(posts => res.json(posts))
        .catch(error => next(error))

    } catch(error){
        next(error)
    }
}