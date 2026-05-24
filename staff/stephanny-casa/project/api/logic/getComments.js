import { ExistenceError, validate } from 'com'
import { data } from '../data/index.js'

export function getComments(postId){
    validate.id(postId, 'postId')

    return data.findPostById(postId)
    .then(post => {
        if (!post) throw new ExistenceError('post not found')

        return data.findCommentsByPostId(postId)
    })
}