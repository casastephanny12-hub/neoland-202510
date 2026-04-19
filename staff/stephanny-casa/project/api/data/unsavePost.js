import { SystemError } from "com";
import { PostModel } from "../mongoose/index.js";

export function unsavePost(userId, postId) {
    return PostModel.updateOne(
        { _id: postId },
        { $pull: { saves: userId } }
    )
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}