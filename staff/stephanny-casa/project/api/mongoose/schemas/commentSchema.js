import mongoose from 'mongoose'

const { Schema, ObjectId } = mongoose

export const commentSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    post: {
        type: ObjectId,
        ref: 'Post',
        required: true
    },
    text: {
        type: String,
        minLength: 1,
        required: true
    },
    commentedAt: {
        type: Date,
        default: Date.now
    }
})