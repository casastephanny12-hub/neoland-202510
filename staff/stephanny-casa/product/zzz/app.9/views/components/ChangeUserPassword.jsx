const { useState } = React

function ChangeUserPassword({ }) {

    console.log('ChangeUserPassword -> call')

    const [message, setMessage] = useState('')

    const handleChangePasswordSubmit = event => {
        event.preventDefault()

        const form = event.target

        const password = form.password.value
        const newPassword = form.newPassword.value
        const newPasswordRepeat = form.newPasswordRepeat.value

        try {
            logic.changeUserPassword(password, newPassword, newPasswordRepeat)

            form.reset()
        } catch (error) {
            setMessage(error.message)
        }
    }
    
    console.log('ChangeUserPassword -> render')
    return <div>
        <Form onSubmit={handleChangePasswordSubmit}>

            <PasswordField alias="password" type="password">Password</PasswordField>

            <PasswordField alias="newPassword" type="password">New Password</PasswordField>

            <PasswordField alias="newPasswordRepeat" type="password">New Password repeat</PasswordField>

            <Button className="self-center" type="submit">Update Password</Button>

        </Form>
        <p>{message}</p>
    </div>

}