import { useState, useEffect } from 'react'

import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './views/Landing'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { Home } from './views/Home'
import { Feedback } from './views/components/commons/Feedback'
import { Context } from './context'

import { AuthError, ValidationError, ExistenceError, DuplicityError, CredentialError } from 'com'

import { logic } from './logic'

import { logger } from './logger'

export function App() {
    logger.debug('App -> call')

    const [feedback, setFeedback] = useState(null)
    let loggedIn = true

    const navigate = useNavigate()

    /*

    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        setFeedback({ message: error.message })
    }

    const clearFeedbackandNavigate = path => {
        setFeedback(null)
        navigate(path)
    }

    */

    const handleGoToLogin = () => clearFeedbackandNavigate('/login')
    const handleGoToRegister = () => clearFeedbackandNavigate('/register')
    const handleGoToHome = () => clearFeedbackandNavigate('/')

    const handleError = error => {
        if (error instanceof AuthError) {
            try {
                logic.logoutUser()

                logger.error(error)
                setFeedback({ message: 'Cant connect, try again!' })
                navigate('/login')
            } catch (error) {
                logger.fatal(error)
                setFeedback({ message: 'there was an error on logout, try it later!' })
            }
        } else if (error instanceof ValidationError) {
            logger.warn(error)
            setFeedback({ message: error.message })
        } else if (error instanceof ExistenceError || error instanceof CredentialError || error instanceof DuplicityError) {
            logger.error(error)
            setFeedback({ message: error.message })
        } else {
            logger.fatal(error)
            setFeedback({ message: 'Sorry, something ins wrong. Try it later!' })
        }
    }

    const handleSuccess = message => setFeedback({ message })

    const handleClear = () => setFeedback(null)

    logger.debug('App -> render')

    const contextValue = {
        onSuccess: handleSuccess,
        onError: handleError,
        onClear: handleClear
    }

    return <Context.Provider value={contextValue}>
        {feedback && <Feedback feedback={feedback} />}

        <Routes>
            <Route path="/" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />
                :
                <Home />
            } />

            <Route path="/login" element={!loggedIn ?
                <Login onUserLoggedIn={handleGoToHome} onGoToRegister={handleGoToRegister} />
                :
                <Navigate to="/" />
            } />

            <Route path="/register" element={!loggedIn ?
                <Register onGoToLogin={handleGoToLogin} />
                :
                <Navigate to="/" />
            } />
        </Routes>
    </Context.Provider>
}