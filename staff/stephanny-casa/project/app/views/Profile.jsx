import { useState, useEffect } from "react"
import { logger } from "../logger"
import { logic } from "../logic"
import { useContext } from "../context"

import { Anchor } from "./components/commons/Anchor"

export function Profile({ onGoToHome }) {
    logger.debug('Profile => call')

    const { onError } = useContext()

    const [username, setUsername] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        logger.debug('Home -> useEffect')

        try {
            logic.getLoggedInUser()
                .then(user => {
                    setUsername(user.username)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    useEffect(() => {
        logger.debug('Profile -> useEffect')

        try {
            logic.getSavedPosts()
                .then(posts => setPosts(posts))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])


    const handleBackClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    logger.debug('Profile -> render')

    return <div className="min-h-screen flex flex-col p-4">

        <Anchor onClick={handleBackClick} className="self-end"><img src="/back.svg" alt="back"></img></Anchor>

        <div className="flex flex-col items-center mt-8 mb-6">
            <img src="/profile.svg" alt="profile" className="w-35 h-35 rounded-full"></img>
            <p className="text-pink-300 text-lg">@{username}</p>
        </div>

        <div className=" flex justify-around">
            <h3 className="font-bold text-sm mb-3"> Saved Posts</h3>
            <h4 className="font-bold text-sm mb-3">My posts</h4>
        </div>
            <ul className="flex flex-col gap-3">
                {posts.map(post => <li
                    key={post.id} className="border border-gray-400 rounded-xl p-3">
                    <p className="text-sm text-gray-600">{post.text}</p>
                    <a href={post.url} target="_blank" className="font-bold text-sm mt-3 text-cyan-500 ">Link</a>
                </li>)}
            </ul>
    </div >

}