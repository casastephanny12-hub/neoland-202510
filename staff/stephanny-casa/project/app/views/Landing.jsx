import { Anchor } from './components/commons/Anchor'
import { logger } from '../logger'

export function Landing({ onGoToLogin, onGoToRegister }) {
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

    return <div className="min-h-screen flex flex-col items-center justify-start p-4">

        <div className="flex flex-col items-center gap-2">
            <img src="/jumprope.png" alt="jumprope image" className="w-60 h-60 object-contain"></img>
            <h1 className="font-bold text-cyan-400 text-2xl">JUMP. SHARE. INSPIRE</h1>
            <p className="text-center text-gray-500 text-sm">The jump rope community. <br />Share your tricks and learn from others</p>
            <h2 className="font-bold text-3xl">JumpShare</h2>
        </div>
        <nav className="flex flex-col items-center gap-2 mt-4">
            <Anchor onClick={handleRegisterClick} className="w-50 h-8 pt-1 rounded-2xl text-white text-center font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500">Create new account</Anchor>
            <Anchor onClick={handleLoginClick} className="w-50 h-8 pt-1 border-2 rounded-2xl text-cyan-500 text-center font-bold">Login</Anchor>
        </nav>
    </div>
}