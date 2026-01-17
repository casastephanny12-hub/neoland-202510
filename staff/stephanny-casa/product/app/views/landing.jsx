// function Landing(props) {

function Landing({ onLoginClick, onRegisterClick }) {
    console.log('Landing -> call')

    //const onLoginClick = props.onLoginClick
    //const onRegisterClick = props.onRegisterClick

    // const {onLoginClick, onRegisterClick} = props

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    console.log('Landing -> render')

    return <div className="p-4">
        <h1 className="font-bold text-4xl my-4">MyPet</h1>
        <p className="text-4xl my-4">Welcome!</p>
        <nav>
            <a className="bg-orange-300 rounded-sm border-2 border-black p-1" onClick={handleLoginClick}>Login</a> or <a className=" bg-orange-300 rounded-sm border-2 border-black p-1" onClick={handleRegisterClick}>Register</a>
        </nav>
    </div>
}