import { Anchor } from './components/commons/Anchor'
import { logger } from '../logger'

export function Landing({onGoToLogin, onGoToRegister}){
    logger.debug('Landing -> call')

    const handleLoginClick = event => {
        event.preventDefault()

        onGoToLogin()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }

    logger.debug('Landing -> render')

    return <div className="p-4">
        <h1>Jumpshare</h1>

        <nav>
            <Anchor onClick={handleRegisterClick}>Create and account</Anchor> <Anchor onClick={handleLoginClick}>Login</Anchor>
        </nav>
    </div>
}