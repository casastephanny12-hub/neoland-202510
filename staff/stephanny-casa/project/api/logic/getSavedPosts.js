import { validate } from 'com'
import { data } from '../data/index.js'

export function getSavedPosts(userId) {
    validate.id(userId, 'userId')

    return data.findSavedPostsByUserId(userId)
}