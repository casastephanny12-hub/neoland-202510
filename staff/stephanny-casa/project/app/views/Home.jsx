import { useState, useEffect } from 'react'

import { logic } from '../logic'

import { PostList } from './components/PostList'

import { useContext } from '../context'

import { logger } from '../logger'

import { Button } from './components/commons/Button'


export function Home({ onGoToCreatePost, onGoToModifyPost, onUserLoggedOut, onGoToProfile }) {
    logger.debug('Home -> call')

    const { onError } = useContext()

    const [name, setName] = useState(null)
    const [image, setImage] = useState('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjcyODl5a3QycmF5a2dkcjE4bzR0OXJ0ZGRxaDgwd2FyY3g5dmw0ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pHVrbJLBQQlpl0QZI6/giphy.gif')

    useEffect(() => {
        logger.debug('Home -> useEffect')

        try {
            logic.getLoggedInUser()
                .then(user => {
                    setName(user.name)
                    setImage(user.image || image)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleAddPostClick = event => {
        event.preventDefault()

        onGoToCreatePost()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            onError(error)
        }
    }

    const handleProfileClick = event => {
        event.preventDefault()

        onGoToProfile()
    }

    logger.debug('Home -> render')

    return <div className="min-h-screen flex flex-col p-4">

        <div className="flex justify-between items-center mb-4 mt-4">

            <div className="flex flex-col">
                <h1 className='font-bold text-md mb-5'>The Jumprope Community</h1>
                <h2 className="font-bold text-sm text-pink-300"> Hi, {name || 'Jumplover'} ! </h2>
            </div>

            <img className="rounded-full w-15 h-15" src={image} />
        </div>

        <PostList onGoToModifyPost={onGoToModifyPost} />

        <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 border-t-3 border-gray-500">

            <Button type="button">🏠</Button>
            <Button type="button" onClick={handleAddPostClick}>➕</Button>
            <Button type="button" onClick={handleProfileClick}>👤</Button>
            <Button type="button" onClick={handleLogoutClick}>🚪</Button>

        </nav>
    </div >
}