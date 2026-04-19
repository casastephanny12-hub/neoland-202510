export class Post {
    constructor(id, ownerId, ownerUsername, ownerImage, text, url, postedAt, saves) {
        this.id = id
        this.ownerId = ownerId
        this.ownerUsername = ownerUsername
        this.ownerImage = ownerImage
        this.text = text
        this.url = url
        this.postedAt = postedAt
        this.saves = saves
    }
}

