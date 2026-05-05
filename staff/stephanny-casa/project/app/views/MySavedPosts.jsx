import { useState, useEffect } from "react"
import { logger } from "../logger"
import { logic } from "../logic"
import { useContext } from "../context"

import { Anchor } from "./components/commons/Anchor"

export function MySavedPosts({onGoToProfile}){

    logger.debug('MySavedPosts -> call')

    const { onError } = useContext()

     const [savedPosts, setSavedPosts] = useState([])

     useEffect(() => {
        logger.debug('MySavedPosts -> useEffect')

        try {
            logic.getSavedPosts()
                .then(posts => setSavedPosts(posts))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleBackProfileClick = event => {
        event.preventDefault()

        onGoToProfile()
    }

    logger.debug('MySavedPosts -> render')

    return <div className="min-h-screen flex flex-col p-4">
    
            <Anchor onClick={handleBackProfileClick} className="self-end mt-2"><img src="/back.svg" alt="back"></img></Anchor>
    
            <ul className="flex flex-col gap-3 mt-6">
                {savedPosts.map(post => <li key={post.id} className="border border-gray-400 rounded-xl p-3">
                    <p className="text-sm text-gray-600">{post.text}</p>
                    <a href={post.url} target="_blank" className="font-bold text-sm mt-6 text-cyan-500">Link here! </a>
                </li>)}
            </ul>
        </div>
}