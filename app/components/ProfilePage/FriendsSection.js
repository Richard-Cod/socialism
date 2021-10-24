import React from 'react'

function FriendsSection({user}) {
    return (
        <div className="px-4 bg-white mt-5 lg:w-full flex-grow-0" >
            <h2 className="">Friends</h2>

           <div className="flex flex-wrap ">
           {user?.friends?.map((value , index) => {
                return <img key={index} className="ml-1 mb-1 h-[75px] w-[75px]" src="/guy-3.jpg" />
            })}

            {!user.friends && <h1>No friends yet</h1>}
           </div>

            
        </div>
    )
}

export default FriendsSection
