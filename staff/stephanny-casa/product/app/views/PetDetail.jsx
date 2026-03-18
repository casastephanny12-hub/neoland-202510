import { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import { Anchor } from './components/commons/Anchor'
import { Button } from './components/commons/Button'

import { logic } from '../logic'
import { Spinner } from './components/Spinner'

export function PetDetail({ onGoToHome, onGotoModifyPet, onError }) {
    console.log('PetDetail -> call')

    const [pet, setPet] = useState(null)

    const { petId } = useParams()

    useEffect(() => {
        try {
            logic.getPet(petId)
                .then(pet => setPet(pet))
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleProfileBackClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleGoToModifyPet = () => onGotoModifyPet(petId)

    console.log('PetDetail -> render')

    return <div className="p-4">
        <h1 className="font-bold italic text-4xl">MyPet</h1>
        <div className="flex justify-between">

            <h2 className="text-xl italic my-4">Pet</h2>

            <Anchor onClick={handleProfileBackClick}>&lt; Back</Anchor>

        </div>

        {pet ? (() => {

            const zuluDate = new Date(pet.birthdate)
            const locaDateString = zuluDate.toLocaleDateString()
            
            return <div className="flex flex-col items-center gap-4" >
                <img src={pet.image} className="rounded-full w-40 h-40 object-cover" />

                <p>{pet.name}</p>

                <p>{pet.weight}kg</p>

                <p>{locaDateString}</p>

                <Button onClick={handleGoToModifyPet}>..✏️</Button>
            </div>
        })() : <Spinner />}
    </div >
}