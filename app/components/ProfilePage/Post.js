import React, { useEffect , useState } from 'react'
import { ShareIcon } from '@heroicons/react/solid'
import {Carousel} from 'react-responsive-carousel'
import getFileUrl from '../../utils/getFileUrl'
import CommentForm from './CommentForm'
import LikeDislikeButton from './LikeDislikeButton'

function Post({postData , propUser}) {
    const [post, setpost] = useState(postData)
    return (
        <div className="border-4 px-4 pb-2 bg-white mb-5 text-xs">

            <div className="flex items-center">
                <img className="rounded-full h-[50px] w-[50px] mr-4 border-4" src={getFileUrl(propUser.profilePic)} />
                <div>
                    <h1 className="text-blue-900">{propUser.fullName}</h1>
                    <h1 className="text-gray-500">Shared {new Date(propUser.createdAt).toLocaleDateString()}</h1>
                </div>
            </div>


            <Carousel 
            infiniteLoop
            // renderThumbs={() => null}
            >
  
                {post.images.map((image) => {
                    return <img key={image} className="w-auto max-h-[300px] mx-auto mt-1" src={getFileUrl(image)} />
                }) }
            </Carousel>
    <p className="text-xs my-4">{post.content}</p>

            <div className="flex justify-between ">
                <div className="flex ">
                    <button className="flex mr-2"> <ShareIcon className="h-full w-3 mr-1" /> Share</button>
                    <LikeDislikeButton post={post} propUser={propUser} setpost={setpost} />
                </div>

                <div className=''>
                {post.likes.length} likes - {post.comments.length} comments
                </div>
            </div>

            {post.comments.map((value , index) => <Comment key={index} />)}

            {post.comments.length === 0 && <h1 className="text-xs text-center text-gray-400">No comment yet</h1>}

            <CommentForm />
            
        </div>
    )

    

   
}

export default Post
