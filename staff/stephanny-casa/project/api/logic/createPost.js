import { ExistenceError, validate } from "com"
import { data, PostData } from "../data/index.js"

export function createPost(userId, text, url){
    validate.id(userId, 'userId')
    validate.text(text, 'text')
    validate.url(url, 'url')

   return data.findUserById(userId)
   .then(user => {
    if (!user) throw new ExistenceError('user not found')

    const post = new PostData(null, userId, text, url)

    return data.insertPost(post)
   })
}