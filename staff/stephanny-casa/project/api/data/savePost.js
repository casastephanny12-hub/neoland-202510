import { SystemError } from 'com'
import { SaveModel } from '../mongoose/index.js'

export function savePost(userId, postId) {
    return SaveModel.findOne({ user: userId, post: postId })
        .catch(error => { throw new SystemError(error.message) })
        .then(save => {
            if (save) throw new Error('post already saved')

            return SaveModel.create({ user: userId, post: postId })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(() => { })

}