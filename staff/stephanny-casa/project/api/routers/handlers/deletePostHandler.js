import { logic } from "../../logic/index.js"

export const deletePostHandler = (req, res, next ) => {
    try{
    const {userId, params: {postId}} = req

    logic.deletePost(userId, postId)
    .then(() => res.status(204).send())
    .catch(error => next(error))
    } catch(error){
        next(error)
    }
}