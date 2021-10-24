import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'
import likePostCall from '../../services/posts/likePostCall'
import dislikePostCall from '../../services/posts/dislikePostCall'

function LikeDislikeButton({post , propUser , setpost}) {
    const isLiked = () => post.likes.find((like) => like.userId === propUser._id)

    function likeOnUi() {
        const { likes } = post
        const newLikes = [{ userId: propUser._id }, ...likes]
        setpost({ ...post, likes: newLikes })
    }

    const likeOnBackend = async () => {
        await likePostCall({likeurId : propUser._id , postId : post._id})
    }

    const handleLike = async () => {
        likeOnUi()
        await likeOnBackend()
    }

    function dislikeOnUI() {
        const result = post.likes.filter((like) => like.userId !== propUser._id)
        setpost({ ...post, likes: result })
        return
    }
    const dislikeOnBackend = async () => {
        await dislikePostCall({likeurId : propUser._id , postId : post._id})
    }
    const handleDislike = async () => {
        await dislikeOnBackend()
        dislikeOnUI()
    }

    return (
        <button onClick={(e) => isLiked() ? handleDislike() : handleLike()} type="button" className="flex ">
                    <HeartIcon
                    style={{
                        color : isLiked() ? "red" : "black"
                    }}
                     className="h-5 w-5 mr-1 hover:text-red-700 rounded-lg" /> Like
            </button>
    )
}

export default LikeDislikeButton
