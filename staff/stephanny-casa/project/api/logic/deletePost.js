import { ExistenceError, OwnershipError, validate } from "com"
import { data } from "../data/index.js"

export function deletePost(userId, postId){
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')

    return data.findUserById(userId)
    .then(userData => {
        if (!userData) throw new ExistenceError('user not found')

        return data.findPostById(postId) 
    })
    .then(postData => {
        if (!postData) throw new ExistenceError('post not found')
        
        if (postData.ownerId !== userId) throw new OwnershipError('user not owner of post')

        return data.deletePost(postId)
    })
}