# JumpShare

## Introduction

An app for jump rope lovers to share their tricks and progress with the community, through text posts and YouTube/Instagram link videos.

![jumping](https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2dvZG80djV4ZGc1cnNnam4xM2d0Z2w1cnl6ZXd6NWlrYWl0eWk5bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6HKvLdJLmuBWg/giphy.gif)

## Functional description 

## Use cases

User

- Register
- Login
- Update credentials (username, password)
- Update profile (name, username, email,  password, image)

Post 

- Create post (text and/or Youtube link video)
- Modify post 
- Remove post
- List posts (feed)

Like 

- like post

Comment 

- Add Comment 
- Remove comment 
- List comments for post

## Ui/UX design 

[Figma](https://www.figma.com/design/EjqfMaKUtHHeDfWmqOptUP/JumpShare-App?node-id=0-1&p=f&t=Wk4wjuu8KOYsA0hY-0)

## Technical description 

### Blocks

- App (React)
- Api (Exprss)
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
 - videoUrl (string)
 - image (string)
 - createdAt (required, date)

 LikeData

 - id(unique, string)
 - owner (UserData.id, string)
 - post (PostData.id, string)

 CommentData

 - id(unique, string)
 - owner (userData.id, string)
 - text (required, string)
 - createdAt (required, date)

 ### Techs

 - HTML / JavaScript / CSS / React / React Router
 - Node / Express / Mongo / Mongoose / BCrypt / JWT / curl
 - Git / Markdown / VSCode / Figma

## Tracking 

[PR](https://github.com/b00tc4mp/neoland-202510/pull/28)

