import { validate } from 'com'
import { data } from '../data/index.js'

export function getUserPosts(userId){
    validate.id(userId, 'userId')

    return data.findPostsByUserId(userId)
}