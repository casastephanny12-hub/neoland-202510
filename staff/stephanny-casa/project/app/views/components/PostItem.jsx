import { logger } from '../../logger'

export function PostItem({ post, onGoToPostDetail, onDeletePostClick, onGoToModifyPost }) {
    logger.debug('PostItem -> call')

    const handleGoToPostDetailClick = postId => onGoToPostDetail(postId)

    const handleDeletePostClick = postId => onDeletePostClick(postId)

    const handleGoToModifyPost = () => onGoToModifyPost(post.id)

    logger.debug('PostItem -> render')

    return <li className="flex flex-col border-2 border-gray-300 rounded-xl p-4 mb-4" onClick={() => handleGoToPostDetailClick(post.id)}>

        <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-cyan-400" />
            <p className="font-bold">User</p>
        </div>


        <p className="text-sm mt-2">{post.text}</p>
        <a href={post.url} target="_blank" className="font-bold text-sm mt-1"> Click here 👆</a>

        <div className="flex justify-between mt-3">
            <button onClick={event => {
                event.stopPropagation()

                handleDeletePostClick(post.id)
            }}>🗑️</button>

            <button onClick={event => {
                event.stopPropagation()

                handleGoToModifyPost()
            }}>✏️</button>    
        </div>
    </li>
}

