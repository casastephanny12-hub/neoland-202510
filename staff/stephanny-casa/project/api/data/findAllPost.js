import { SystemError } from "com";
import { PostModel } from "../mongoose/index.js";
import { PostData } from "./models/index.js";

export function findAllPost() {
    return PostModel.find()
        .catch(error => { throw new SystemError(error.message) })
        .then(postModels => postModels.map(postModel => {
            const { id, owner, text, url, postedAt } = postModel

            return new PostData(id, owner.toString(), text, url, postedAt)
        }))
}