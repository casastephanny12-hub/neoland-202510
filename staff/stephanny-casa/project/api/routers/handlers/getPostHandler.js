 import { logic } from "../../logic/index.js"

export const getPostHandler = (req, res, next)  => {
    try {

        const { userId } = req

        logic.getPosts(userId)
        .then(posts => res.json(posts))
        .catch(error => next(error))

    } catch(error){
        next(error)
    }
}