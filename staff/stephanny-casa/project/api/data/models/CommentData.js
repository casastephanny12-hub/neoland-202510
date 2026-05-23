export class CommentData{
    constructor(id, userId, postId, username, text, commentedAt){
        this.commentId = id
        this.userId = userId
        this.postId = postId
        this.username = username
        this.text = text
        this.commentedAt = commentedAt
    }
}