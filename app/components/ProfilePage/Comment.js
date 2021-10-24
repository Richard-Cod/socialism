import React from 'react'


function Comment() {
    return (
            <div className="flex p-2 text-xs">
                <img src='/guy-3.jpg' className="rounded-full h-10 w-10 mr-2" />
                <div>
                    <h1 className="text-black font-bold">Maria Gonzales</h1>
                    <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
            </div>
    )
}


export default Comment
