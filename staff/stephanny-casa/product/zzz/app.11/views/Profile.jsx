import { useState } from 'react'
import { Anchor } from './components/commons/Anchor'
import { ChangeUserEmail } from './components/ChangeUserEmail'
import { ChangeUserPassword } from './components/ChangeUserPassword'

export function Profile({ onGoToHome }) {

    console.log('Profile -> call')

    const[view, setView] = useState(null)

    const handleProfileBackClick = event => {
        event.preventDefault()

        onGoToHome()
    }

    const handleChangeEmailClick = event => {
        event.preventDefault()
        
        setView('change-email')
    }

    const handleChangePasswordClick = event =>{
        event.preventDefault()

        setView('change-password')
    }

    console.log('Profile -> render')

    return <div className="p-4">
        <h1 className="font-bold italic text-4xl">MyPet</h1>
        <div className="flex justify-between">

            <h2 className="text-xl italic my-4">Profile</h2>

            <Anchor onClick={handleProfileBackClick}>&lt; Back</Anchor>

        </div>

        <ul>
            <li><Anchor onClick={handleChangeEmailClick}>Change E-mail</Anchor></li>
            <li><Anchor onClick={handleChangePasswordClick}>Change Password</Anchor></li>
        </ul>

        {view === 'change-email' && <ChangeUserEmail />}
        {view === 'change-password' && <ChangeUserPassword />}
    </div>
}