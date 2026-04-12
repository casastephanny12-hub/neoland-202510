import { ExistenceError, OwnershipError, validate } from "com"
import { data } from "../data/index.js"

export function modifyPost(userId, postId, text, url){
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')
    validate.text(text, 'text')
    validate.url(url, 'url')

    return data.findUserById(userId)
    .then(userData => {
        if (!userData) throw new ExistenceError('user not found')

        return data.findPostById(postId)
    })
    .then(postData => {
        if (!postData) throw new ExistenceError('post not found')

        if(postData.ownerId !== userId) throw new OwnershipError('user not owner of post')

        return data.updatePost({ id: postId, text, url})
    })
}