import { SystemError } from 'com'
import { SaveModel } from '../mongoose/index.js'

export function unsavePost(userId, postId) {
    return SaveModel.findOneAndDelete({ user: userId, post: postId })
        .catch(error => { throw new SystemError(error.message) })
        .then(save => {
            if (!save) throw new Error('save not found')
        })
}