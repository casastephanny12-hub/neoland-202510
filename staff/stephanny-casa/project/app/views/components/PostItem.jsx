import { logger } from '../../logger'

export function PostItem({ post, onDeletePostClick, onGoToModifyPost, loggedUserId }) {
    logger.debug('PostItem -> call')

    const handleDeletePostClick = postId => onDeletePostClick(postId)

    const handleGoToModifyPost = () => onGoToModifyPost(post.id)

    logger.debug('PostItem -> render')

    console.log('post', post)

    return <li className="flex flex-col border-2 border-gray-300 rounded-xl p-4 mb-4">

        <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
                <img src={post.ownerImage || "/user.svg"} alt="user" className="w-10 h-10 rounded-full"></img>
                <p className='font-bold  text-pink-300'>@{post.ownerUsername}</p>
            </div>

            <img src="/savepost.svg" alt="savepost" className="w-7 h-7"></img>
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

    </li>
}

