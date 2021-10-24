import React from 'react'

function CommentForm() {
    return (
        <div className="flex p-2 ">
                <img src='/guy-3.jpg' className="rounded-full h-10 w-10 mr-2" />
                <div className="w-full border-2 pt-1 pl-2">
                    <input className="w-full outline-none" type="text" placeholder="Press enter to post comment"/>
                </div>
            </div>
    )
}

export default CommentForm
