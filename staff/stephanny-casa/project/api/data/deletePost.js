import { SystemError } from "com"
import { PostModel } from "../mongoose/index.js"

export function deletePost(postId) {
    return PostModel.deleteOne({ _id: postId })
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })

}