import { useState, useEffect } from 'react'

import { Button } from './commons/Button'
import { Feedback } from './commons/Feedback'

import { logic } from '../../logic'

export function PetList({ onGoToPetDetail }) {

    console.log('PetList -> call')

    const [feedback, setFeedback] = useState(null)
    const [pets, setPets] = useState([])
    const [petId, setPetId] = useState(null)

    useEffect(() => {
        console.log('PetList -> useEffect')
        try {
            logic.getPets()
                .then((pets) => {
                    setPets(pets)
                })
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
        }
    }, [])

    const handleDeletePetClick = petId => setPetId(petId)


    const handleCancelDeletePetClick = event => {
        event.preventDefault()

        setPetId(null)
    }

    const handleConfirmDeletePetClick = event => {
        event.preventDefault()

        try {
            logic.deletePet(petId)
                .then(() => {
                    return logic.getPets()
                })
                .then(pets => {
                    setPetId(null)
                    setPets(pets)
                })
                .catch(error => setFeedback({ message: error.message, level: 'error' }))
        } catch (error) {
            setFeedback({ message: error.message, level: 'error' })
        }
    }

    const handleGoToPetDetailClick = petId => onGoToPetDetail(petId)

    console.log('PetList -> render')

    return <div>

        <ul className="flex flex-col gap-2 mt-2">
            {pets.map(pet => <li className="flex items-center border-2 border-orange-500 p-2 justify-between" onClick={() => handleGoToPetDetailClick(pet.id)}>
                <div className="flex items-center gap-4 w-full">
                    <img src={pet.image}
                        className="rounded-full w-30 h-30 object-cover" />

                    <p>{pet.name}</p>
                </div>

                <Button className="justify-self-end" onClick={event => {
                    event.stopPropagation()
                    handleDeletePetClick(pet.id)
                }
                }>🗑️</Button>
            </li>)}
        </ul>

        {
            petId && <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center">
                <div className="bg-white border-black border-2 p-2">
                    <p className="text-center">Delete Pet?</p>
                    <div className="flex justify-center gap-2">
                        <Button onClick={handleCancelDeletePetClick}>❎</Button>
                        <Button onClick={handleConfirmDeletePetClick}>✅</Button>

                    </div>
                </div>
            </div>
        }

        {feedback && <Feedback feedback={feedback} />}
    </div >
}