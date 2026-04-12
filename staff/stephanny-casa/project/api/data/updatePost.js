import { SystemError } from 'com'
import { PostModel } from '../mongoose/index.js'

export function updatePost(postData) {
    return PostModel.updateOne({ _id: postData.id }, { $set: postData })
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}