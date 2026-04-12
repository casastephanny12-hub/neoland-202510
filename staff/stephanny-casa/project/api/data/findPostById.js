import { SystemError } from "com";
import { PostModel } from "../mongoose/index.js";
import { PostData } from "./models/index.js";

export function findPostById(postId){
    return PostModel.findById(postId)
    .catch(error => {throw new SystemError(error.message)})
    .then(postModel => {
        if (!postModel) return null

        const {id, owner, text, url, postedAt} = postModel

        return new PostData(id, owner.toString(), text, url, postedAt)
    })

}