import { useState, useEffect } from 'react'

import { Routes, Route, useNavigate, Navigate } from 'react-router'




import { Landing } from './views/Landing'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { Home } from './views/Home'
import { CreatePost } from './views/CreatePost'
import { ModifyPost } from './views/ModifyPost'
import { Profile } from './views/Profile'
import { MyPosts } from './views/MyPosts'
import { MySavedPosts } from './views/MySavedPosts'
import { Feedback } from './views/components/commons/Feedback'
import { Context } from './context'

import { AuthError, ValidationError, ExistenceError, DuplicityError, CredentialError } from 'com'

import { logic } from './logic'

import { logger } from './logger'

export function App() {
    logger.debug('App -> call')

    const [feedback, setFeedback] = useState(null)
    let loggedIn = false

    const navigate = useNavigate()


    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        setFeedback({ message: error.message })
    }

    const clearFeedbackandNavigate = path => {
        setFeedback(null)
        navigate(path)
    }

    const handleGoToLogin = () => clearFeedbackandNavigate('/login')
    const handleGoToRegister = () => clearFeedbackandNavigate('/register')
    const handleGoToHome = () => clearFeedbackandNavigate('/')
    const handleGoToCreatePost = () => clearFeedbackandNavigate('/create-post')
    const handleGoToModifyPost = postId => clearFeedbackandNavigate(`/posts/${postId}/edit`)
    const handleGoToProfile = () => clearFeedbackandNavigate('/profile')
    const handleGoToMyPosts = () => clearFeedbackandNavigate('/profile/my-posts')
    const handleGoToMySavedPosts = () => clearFeedbackandNavigate('/profile/saved-posts')

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
                <Home onGoToCreatePost={handleGoToCreatePost} onGoToModifyPost={handleGoToModifyPost} onUserLoggedOut={handleGoToLogin} onGoToProfile={handleGoToProfile} />
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

            <Route path="/create-post" element={loggedIn ?
                <CreatePost onGoToHome={handleGoToHome} />
                :
                <Navigate to="/login" />
            } />

            <Route path="/posts/:postId/edit" element={loggedIn ?
                <ModifyPost onGoBack={handleGoToHome} />
                :
                <Navigate to="/login" />
            } />

            <Route path="/profile" element={loggedIn ?
                <Profile onGoToHome={handleGoToHome} onGoToMyPosts={handleGoToMyPosts} onGoToMySavedPosts={handleGoToMySavedPosts} />
                :
                <Navigate to="/login" />
            } />

            <Route path="/profile/my-posts" element={loggedIn ?
                <MyPosts onGoToProfile={handleGoToProfile}/>
                :
                <Navigate to="/login" />
            } />

              <Route path="/profile/saved-posts" element={loggedIn ?
                <MySavedPosts onGoToProfile={handleGoToProfile}  />
                :
                <Navigate to="/login" />
            } />
        </Routes>
    </Context.Provider>
}