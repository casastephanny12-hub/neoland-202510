import { SystemError } from "com";
import { PostModel } from "../mongoose/index.js";

export function savePost(userId, postId) {
    return PostModel.updateOne(
        { _id: postId },
        { $addToSet: { saves: userId } }
    )
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}