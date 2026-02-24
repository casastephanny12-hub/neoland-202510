import { useState, useEffect } from 'react'

import { Anchor } from './components/commons/Anchor'
import { Button } from './components/commons/Button'
import { Feedback } from './components/commons/Feedback'
import { Spinner } from './components/Spinner'

import { PetList } from './components/PetList'
import { logic } from '../logic'


export function Home({ onGoToAddPet, onUserLoggedOut, onGoToProfile, onGoToPetDetail }) {

    console.log('Home -> call')

    const [feedback, setFeedback] = useState(null)
    const [name, setName] = useState(null)
    const [image, setImage] = useState('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXBkNG81bTV6bWc5ampmZGN5eXB3bXR6aXFua3NoOHJicjlqaDlwNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lrbyojb9qeylNQnTUX/giphy.gif')

    useEffect (() => {
        setTimeout(() => {
        try {
            logic.getLoggedInUser()
            .then(user => {
                setName(user.name)
                setImage(user.image || image)
        })
            .catch(error => setFeedback({ message: error.message, level: 'error'}))
        } catch(error) {
            setFeedback({ message: error.message, level: 'error'})
        }
        }, 1000)
    }, [])

    const handleAddPetClick = event => {
        event.preventDefault()

        onGoToAddPet()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            setFeedback({message: error.message, level: 'error' })
        }
    }

    const handleProfileClick = event => {
        event.preventDefault()

        onGoToProfile()
    }

    const handleGoToPetDetailClick = petId => onGoToPetDetail(petId)


    console.log('Home -> render')

    return <div className="p-4">

        <h1 className="font-bold text-4xl my-4">MyPet</h1>

        {name? <>

        <h2 className="italic my-4 flex gap-2 items-center"> Welcome, {name} ! <img className='rounded-full w-12 h-12 object-cover' src= {image} /></h2>


        <div className="flex justify-between">
            <Anchor className="self-center" onClick={handleAddPetClick}>+ Pet</Anchor>

            <Anchor onClick={handleProfileClick}>🐻Profile</Anchor>

            <Button className="self-center" type="button" onClick={handleLogoutClick}>Logout</Button>
        </div>

        <PetList onGoToPetDetail={handleGoToPetDetailClick} />

       {feedback && <Feedback feedback={feedback} />}
       </>: <Spinner />}
    </div>
}