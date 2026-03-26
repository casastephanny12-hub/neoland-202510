import { useState, useEffect } from 'react'

import { Button } from './commons/Button'
import { PetItem } from './PetItem'

import { useContext } from '../../contex'

import { logic } from '../../logic'


export function PetList({ onGoToPetDetail }) {
    console.log('PetList -> call')

    const { onError } = useContext()
                                      
    const [pets, setPets] = useState([])
    const [petId, setPetId] = useState(null)

    useEffect(() => {
        console.log('PetList -> useEffect')
        try {
            logic.getPets()
                .then((pets) => {
                    setPets(pets)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
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
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    const handleGoToPetDetailClick = petId => onGoToPetDetail(petId)

    console.log('PetList -> render')

    return <div>

        <ul className="flex flex-col gap-2 mt-2">
            {pets.map(pet => <PetItem key={pet.id} pet={pet} onGoToPetDetail={onGoToPetDetail} onDeletePetClick={handleDeletePetClick} /> )}
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
    </div >
}