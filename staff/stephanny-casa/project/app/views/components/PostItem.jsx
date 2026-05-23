import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { logger } from '../../logger'
import { Input } from './commons/Input'
import { Button } from './commons/Button'
import { useContext } from '../../context'


export function PostItem({ post, onDeletePostClick, onGoToModifyPost, onSavePostClick, loggedUserId, savedPosts }) {
    logger.debug('PostItem -> call')

    const { onError } = useContext()

    const [comments, setComments] = useState([])

    const [text, setText] = useState('')

    const [commentId, setCommentId] = useState(null)

    const [editingCommentId, setEditingCommentId] = useState(null)

    const [editText, setEditText] = useState('')

    useEffect(() => {
        logger.debug('CommentList -> UseEffect')

        try {
            logic.getComments(post.id)
                .then(comments => {
                    setComments(comments)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleCreateCommentClick = () => {
        logic.createComment(post.id, text)
            .then(() => logic.getComments(post.id))
            .then(comments => {
                setComments(comments)
                setText('')
            })
            .catch(error => onError(error))
    }

    const handleRemoveCommentClick = commentId => setCommentId(commentId)

    const handleCancelRemoveCommentClick = event => {
        event.preventDefault()

        setCommentId(null)
    }

    const handleConfirmRemoveCommentClick = event => {
        event.preventDefault()

        try {
            logic.deleteComment(commentId)
                .then(() => {
                    return logic.getComments(post.id)
                })
                .then(comments => {
                    setCommentId(null)
                    setComments(comments)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }

    const handleDeletePostClick = postId => onDeletePostClick(postId)

    const handleGoToModifyPost = () => onGoToModifyPost(post.id)

    const handleSavePostClick = event => {
        event.preventDefault()
        console.log('post.id', post.id)
        onSavePostClick(post.id)
    }

    const handleEditCommentClick = comment => {
        setEditingCommentId(comment.commentId)
        setEditText(comment.text)
    }

    const handleModifyCommentClick = () => {
        logic.modifyComment(editingCommentId, editText)
            .then(() => logic.getComments(post.id))
            .then(comments => {
                setComments(comments)
                setEditingCommentId(null)
                setEditText('')
            })
            .catch(error => onError(error))
    }

    logger.debug('PostItem -> render')


    return <li className="flex flex-col border-2 border-gray-300 rounded-xl p-4 mb-4">

        <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
                <img src={post.ownerImage || "/user.svg"} alt="user" className="w-10 h-10 rounded-full"></img>
                <p className='font-bold  text-pink-300'>@{post.ownerUsername}</p>
            </div>

            <button onClick={handleSavePostClick}><img src={savedPosts?.includes(post.id) ? '/savedpost.svg' : '/savepost.svg'}></img></button>
        </div>

        <p className="text-md mt-3 text-gray-400">{post.text}</p>
        <a href={post.url} target="_blank" className="font-bold text-sm mt-3 text-cyan-500"> Click here 👆</a>
        <p className='text-xs mt-4'>{new Date(post.postedAt).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })}</p>


        {post.ownerId === loggedUserId &&
            <div className="flex items-center self-end mt-3">

                <button onClick={event => {
                    event.stopPropagation()

                    handleGoToModifyPost()
                }}><img src="/modify.svg" alt="edit"></img></button>

                <button onClick={event => {
                    event.stopPropagation()

                    handleDeletePostClick(post.id)
                }}><img src="/delete.svg" alt="delete"></img></button>

            </div>
        }

        <ul className="mt-3">
            {comments.map(comment =>
                <li key={comment.commentId} className="flex justify-between items-center text-sm text-gray-500 mt-1">
                    {editingCommentId === comment.commentId
                        ? <div className="flex gap-2 flex-1">
                            <Input
                                type="text"
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                                className="flex-1 text-sm"
                            />
                            <button onClick={handleModifyCommentClick} className="text-cyan-400 font-bold text-sm">Save</button>
                            <button onClick={() => setEditingCommentId(null)} className="text-gray-400 font-bold text-sm">Cancel</button>
                        </div>
                        : <p><span className="font-bold text-pink-300">@{comment.username}</span> {comment.text}</p>
                    }
                    {comment.userId === loggedUserId && editingCommentId !== comment.commentId &&
                        <div className="flex gap-1">
                            <button onClick={() => handleEditCommentClick(comment)}>
                                <img src="/editcomment.svg" alt="edit" className="w-4 h-4"></img>
                            </button>
                            <button onClick={() => handleRemoveCommentClick(comment.commentId)}>
                                <img src="/delete.svg" alt="delete" className="w-4 h-4"></img>
                            </button>
                        </div>
                    }
                </li>
            )}
        </ul>

        <div className="flex gap-2 mt-4">
            <Input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 text-sm"
            />
            <button onClick={handleCreateCommentClick} className="text-cyan-400 font-bold text-sm">Send</button>
        </div>

        {
            commentId && <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center">
                <div className="bg-white border-gray-300 border-2 rounded-md p-2">
                    <p className="text-center text-gray-500 font-bold">Are u sure u want to delete this comment?</p>
                    <div className="flex justify-center">
                        <Button onClick={handleCancelRemoveCommentClick}><img src="/cancel.svg" alt="cancel"></img></Button>
                        <Button onClick={handleConfirmRemoveCommentClick}><img src="/confirm.svg" alt="confirm"></img></Button>
                    </div>
                </div>
            </div>
        }
    </li>
}

