import { SystemError } from "com";
import { PostModel } from "../mongoose/index.js";
import { PostData } from "./models/index.js";

export function findAllPost() {
    return PostModel.find().populate('owner', 'username image')
        .catch(error => { throw new SystemError(error.message) })
        .then(postModels => postModels.map(postModel => {
            const { id, owner, text, url, postedAt } = postModel

            return new PostData(id, owner.id, owner.username, owner.image, text, url, postedAt)
        }))
}