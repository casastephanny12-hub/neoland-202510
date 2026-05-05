import { useState, useEffect } from "react"
import { logger } from "../logger"
import { logic } from "../logic"
import { useContext } from "../context"

import { Anchor } from "./components/commons/Anchor"
import { CredentialButton } from "./components/commons/CredentialButton"

export function Profile({ onGoToHome, onGoToMyPosts, onGoToMySavedPosts }) {
    logger.debug('Profile => call')

    const { onError } = useContext()

    const [username, setUsername] = useState(null)

    useEffect(() => {
        logger.debug('Profile -> useEffect')

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


    const handleBackClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleMyPostsClick = event => {
        event.preventDefault()

        onGoToMyPosts()

    }

    const handleMySavedPostsClick = event => {

        event.preventDefault()

        onGoToMySavedPosts()

    }

    logger.debug('Profile -> render')

    return <div className="min-h-screen flex flex-col p-4">

        <Anchor onClick={handleBackClick} className="self-end"><img src="/back.svg" alt="back"></img></Anchor>

        <div className="flex flex-col items-center mt-8 mb-6">

            <h1 className="font-bold text-lg">Profile</h1>
            <img src="/profile.svg" alt="profile" className="w-35 h-35 rounded-full"></img>
            <img src="/addimage.svg" alt="addimage" className="w-8 h-8"></img>
            <p className="text-pink-300 text-lg font-bold">@{username}</p>
        </div>

        <div className="flex justify-around gap-4 mb-4 font-bold text-cyan-400">
            <button onClick={handleMyPostsClick} className="font-bold">My Posts</button>
            <button onClick={handleMySavedPostsClick} className="font-bold">Saved Posts</button>
        </div>

        <div className="flex flex-col">
            <p className="text-gray-400 mb-2">Credentials</p>

            <CredentialButton icon="/credentialicon.svg">Name</CredentialButton>
            <CredentialButton icon="/credentialicon.svg">Username</CredentialButton>
            <CredentialButton icon="/emailcredential.svg">Email</CredentialButton>
            <CredentialButton icon="/passwordcredential.svg">Password</CredentialButton>
        </div>
    </div>
}