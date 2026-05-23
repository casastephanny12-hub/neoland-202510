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
import { getUserPosts } from './getUserPosts'
import { createComment} from './createComment'
import { getComments} from './getComments'
import { deleteComment } from './deleteComment'
import { modifyComment } from './modifyComment'


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
    getSavedPosts,
    getUserPosts,
    createComment,
    getComments, 
    deleteComment,
    modifyComment
}