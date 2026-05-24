import mongoose from 'mongoose'
import { URL_REGEX } from 'com'

const { Schema, ObjectId } = mongoose

export const postSchema = new Schema ({
    owner: {
        type: ObjectId, 
        ref: 'User'

    }, 

    text: {
        type: String, 
        minLength: 1,
        required: true
    },

    url: {
        type: String,
        match: URL_REGEX,
        required: false

    },

    postedAt: {
        type: Date, 
        default: Date.now
    },
})