import { Button } from "./commons/Button";

export function PetItem({pet, onGoToPetDetail, onDeletePetClick}) {
    console.log('PetItem -> call')

    const handleGoToPetDetailClick = petId => onGoToPetDetail(petId)

    const handleDeletePetClick = petId => onDeletePetClick

    console.log('PetItem -> render')

    return <li className="flex items-center border-2 border-orange-500 p-2 justify-between" onClick={() => handleGoToPetDetailClick(pet.id)}>
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
    </li>
}