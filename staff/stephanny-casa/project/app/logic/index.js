import { loginUser } from './loginUser'
import { registerUser } from './registerUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { logoutUser } from './logoutUser'
import { getLoggedInUser } from './getLoggedInUser'
import { getPosts } from './getPosts'
import { getPost } from './getPost'
import { createPost } from './createPost'
import { modifyPost } from './modifyPost'
import { deletePost } from './deletePost'
import { savePost } from './savePost'
import { unsavePost } from './unsavePost'
import { getSavedPosts } from './getSavedPosts'



export const logic = {
    loginUser,
    registerUser,
    isUserLoggedIn,
    logoutUser,
    getLoggedInUser,
    createPost,
    getPosts,
    getPost,
    modifyPost,
    deletePost,
    savePost,
    unsavePost,
    getSavedPosts
}