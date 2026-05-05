import { SystemError } from 'com'
import { SaveModel } from '../mongoose/index.js'
import { PostData } from './models/index.js'

export function findSavedPostsByUserId(userId) {
    return SaveModel.find({ user: userId}).populate('post')
        .catch(error => { throw new SystemError(error.message) })
        .then(saveModels => saveModels.map(saveModel => {
            const { id, owner, text, url, postedAt} = saveModel.post

            return new PostData(id, owner.id, owner.username, owner.image, text, url, postedAt)
        }))
}