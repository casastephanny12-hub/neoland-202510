import { useState, useEffect } from 'react'

import { PostItem } from './PostItem'

import { logic } from '../../logic'

import { useContext } from '../../context'

import { logger } from '../../logger'

import { Button } from './commons/Button'

export function PostList({ onGoToModifyPost }) {
    logger.debug('PostList -> call')

    const { onError } = useContext()

    const [posts, setPosts] = useState([])

    const [postId, setPostId] = useState(null)

    const [loggedUserId, setLoggedUserId] = useState(null)

    useEffect(() => {
        logger.debug('PostList -> useEffect')

        try {
            logic.getPosts()
                .then(posts => {
                    setPosts(posts)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    useEffect(() => {
        try {
            logic.getLoggedInUser()
                .then(user => setLoggedUserId(user.id))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleRemovePostClick = postId => setPostId(postId)

    const handleCancelRemovePostClick = event => {
        event.preventDefault()

        setPostId(null)
    }

    const handleConfirmRemovePostClick = event => {
        event.preventDefault()

        try {
            logic.deletePost(postId)
                .then(() => {
                    return logic.getPosts()
                })
                .then(posts => {
                    setPostId(null)
                    setPosts(posts)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    const handleSavePostClick = postId => {
        const post = posts.find(post => post.id === postId)
        try {
            if (post.saves.includes(loggedUserId)) {
                logic.unsavePost(loggedUserId, postId)
                    .then(() => logic.getPosts())
                    .then(posts => setPosts(posts))
                    .catch(error => onError(error))
            } else {
                logic.savePost(loggedUserId, postId)
                    .then(() => logic.getPosts())
                    .then(posts => setPosts(posts))
                    .catch(error => onError(error))
            }
        } catch (error) {
            onError(error)
        }
    }

    logger.debug('PostList -> render')

    return <div>
        <ul>
            {posts.map(post => <PostItem
                key={post.id}
                post={post}
                loggedUserId={loggedUserId}
                onDeletePostClick={handleRemovePostClick}
                onGoToModifyPost={onGoToModifyPost}
                onSavePostClick={handleSavePostClick}
            />)}
        </ul>

        {postId && <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center">
            <div className="bg-white border-gray-300 border-2 rounded-md p-2">
                <p className="text-center text-gray-500 font-bold"> Are u sure u want to delete this post?</p>

                <div className="flex justify-center">
                    <Button onClick={handleCancelRemovePostClick}><img src="/cancel.svg" alt="cancel"></img></Button>
                    <Button onClick={handleConfirmRemovePostClick}><img src="/confirm.svg" alt="confirm"></img></Button>
                </div>
            </div>
        </div>}
    </div>
}