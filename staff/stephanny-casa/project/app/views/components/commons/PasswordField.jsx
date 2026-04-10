import { useState } from 'react'


import { Label } from './Label'
import { Input } from './Input'
import { ButtonPassword } from './ButtonPassword' 

export function PasswordField({ alias, children}){
    const [type, setType] = useState('password')

    const handleTogglePasswordClick = event => {
        event.preventDefault()

        setType(type === 'password' ? 'text' : 'password')
    }

    return <div className="flex flex-col">

        <Label alias={alias}>{children}</Label>
        <Input alias={alias} type={type} autoComplete="off" className={type === 'password' ? '' : 'bg-cyan-200'}/>
         <ButtonPassword className="self-end" type="button" onClick={handleTogglePasswordClick}>{type === 'password' ? '👁️' : '👁️'} </ButtonPassword>
    </div>
}