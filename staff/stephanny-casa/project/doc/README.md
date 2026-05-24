# JumpShare

## Introduction

An app for jump rope lovers to share their tricks and progress with the community, through text posts and YouTube/Instagram link videos.

![jumping](https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2dvZG80djV4ZGc1cnNnam4xM2d0Z2w1cnl6ZXd6NWlrYWl0eWk5bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6HKvLdJLmuBWg/giphy.gif)

## Functional description 

## Use cases

User

- Register
- Login
- Logout

Post 

- Create post (text and/or URL)
- Modify post 
- Remove post
- List posts (Feed)
- List own posts (MyPosts)

Save 

- Save Post
- Unsave Post
- List saved posts (MySavedPosts)

Comment 

- Add Comment 
- Edit comment
- Remove comment 
- List comments per  post

## Ui/UX design 

[Figma](https://www.figma.com/design/EjqfMaKUtHHeDfWmqOptUP/JumpShare-App?node-id=0-1&p=f&t=Wk4wjuu8KOYsA0hY-0)

## Technical description 

### Blocks

- App (React)
- Api (Express)
- DB (Mongo)

 ### Packages

 - Api (handlers, logic, data)
 - App (components, logic, data)
 - Com (errors, validate, regex)
 - Doc (readme, images)

 ### Data Model

 UserData 

 - id (unique, string)
 - name (required, string)
 - email (unique, required, string)
 - username (unique, required, string)
 - password (required, hashed, string)
 - image (string)

 PostData

 - id (unique, string)
 - owner (UserData.id, string)
 - text (required, string)
 - url (string)
 - postedAt (date)

 SaveData

 - id(unique, string)
 - user (UserData.id, string)
 - post (PostData.id, string)

 CommentData

- id (unique, string)
- user (UserData.id, string)
- post (PostData.id, string)
- text (required, string)
- commentedAt (date)

 ### Techs

 - HTML / JavaScript / CSS / React / React Router
 - Node / Express / Mongo / Mongoose / BCrypt / JWT / curl
 - Git / Markdown / VSCode / Figma

## Tracking 

[PR](https://github.com/b00tc4mp/neoland-202510/pull/28)

