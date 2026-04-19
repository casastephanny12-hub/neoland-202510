import { SystemError } from 'com'
import { PostModel } from '../mongoose/index.js'

export function insertPost(postData) {
    const { ownerId, text, url, postedAt } = postData

    const postModel = new PostModel({ owner: ownerId, text, url })

    return postModel.save()
        .catch(error => { throw new SystemError(error.message) })
        .then(postModel => { })
}