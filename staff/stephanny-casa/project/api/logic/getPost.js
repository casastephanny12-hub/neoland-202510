import { ExistenceError, validate } from 'com'
import { data } from '../data/index.js'
import { Post } from './models/index.js'


export function getPost(userId, postId) {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')

    return data.findPostById(postId)
        .then(postData => {
            if (!postData) throw new ExistenceError('post not found')

            const { id, ownerId, text, url, postedAt } = postData

            return new Post(id, ownerId, null, null, text, url, postedAt)
        })

}