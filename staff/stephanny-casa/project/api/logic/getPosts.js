import { validate } from "com"
import { data } from "../data/index.js"

export function getPosts(userId){
    validate.id(userId, 'userId')

    return data.findAllPost()
}