import React from 'react'
import { UserCircleIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/solid'
import { PhotographIcon } from '@heroicons/react/solid'
import { ShareIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'

import { toast , ToastContainer } from 'react-toastify';
import { connect } from 'react-redux'
import FileUpload from '../app/components/shared/FileUpload'
import getFileUrl from '../app/utils/getFileUrl'
import PagesLayout from '../app/layout/PagesLayout'
import getAllPostsCall from '../app/services/posts/getAllPostsCall'






function IconLink({value , Icon , currentTab , onClick }) {
    let className = `
    flex items-center 
            text-xs border-black-100 border-t-[1px] 
            border-solid py-1 sm:border-r-2 sm:border-t-0
            sm:pr-10
            hover:text-black hover:text-sm duration-75 cursor-pointer  `
    
    className += value.name !== currentTab && " text-gray-400 "
    return (
            <li onClick={onClick} className={className}> {Icon({className : "h-5 w-5 mr-2"})} {value.name} </li>
    )
}


function HeadSection({user}) {
    const [currentTab, setcurrentTab] = React.useState("TimeLine")
    const elements = [
        {name : "TimeLine" , icon :  PhotographIcon},
        {name : "About" , icon : UserCircleIcon},
        {name : "Friends" , icon : UserGroupIcon},
        {name : "Photos" , icon : PhotographIcon},
    ]
    return (
        <div style={{
            position : "relative"
        }} className="bg-white">
            

            <div className="bg-no-repeat lg:flex   ">
                <img className="w-full max-h-[300px] lg:h-[200px]" src={getFileUrl(user.covPic) || "https://via.placeholder.com/728x90.png?text=choose your pic"} />
                <div className="w-1/2 bg-gray-400"></div>

            </div>

            <FileUpload type="covPic" title="Set new cov pic" style={{
                position : "absolute",
                top : 0,
                left : 0
            }} />

            <div className=" flex  text-black">
             
                    <img className="rounded-md h-14 w-14 border-4 border-gray-100 ml-3"   src={getFileUrl(user.profilePic) || `https://eu.ui-avatars.com/api/?name=${user.fullName}`} />
                    <FileUpload type="profilePic" title="Set new cov pic" style={{
                position : "absolute",
                left : 0

            }} />

                    <div style={{
                    }} className="ml-4 flex flex-col pb-3 text-xl  w-full justify-center sm:justify-between ">

                        {/* <div>1</div>
                        <div>2</div>
                        <div>3</div> */}
                        <div>
                            <h1 className="text-md">{user.fullName}</h1>
                        </div>

                        <div className="">
                            <ul style={{
                            }} className="hidden sm:flex justify-between max-w-[500px]">
                                {elements.map((value) => <IconLink key={value.name} onClick={(e) => setcurrentTab(value.name)} value={value} currentTab={currentTab} Icon={value.icon} /> )}                               
                            </ul>
                        </div>

                    </div>
               
            </div>
            <ul className="pl-3 sm:hidden">
                {elements.map((value) => <IconLink key={value.name} value={value} Icon={value.icon} /> )}                               
            </ul>
        </div>
    )
}


 function AboutSection({user}) {
     const elements = [
         {title : "Birthdate" , content  : user.birthdate && new Date(user.birthdate).toLocaleDateString()},
        //  {title : "Job" , content  : user.job },
         {title : "Gender" , content  : user.gender},
        //  {title : "Lives in" , content  : user.livesIn},
     ]
    return (
        <div className="px-4 bg-white mt-5 lg:w-full">
            <h2 className="border-solid border-b-4 border-blue-200">About</h2>

            <div className="max-w-[400px]">
            {elements.map(({title , content }) => {
                
                return      <div key={title} className="py-2 sm:flex sm:justify-between ">
                                <p className="text-gray-600 text-xs">{title}</p>
                                <p className="text-gray-900 text-xs">{content || "Not defined"}</p>
                            </div>
                 })}

            </div>
            
        </div>
    )
}


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


function Post({post , propUser}) {
    return (
        <div className=" px-4 pb-2 bg-white mb-5 text-xs">

            <div className="flex">
                <img className="rounded-full h-[50px] w-[50px] mr-4 " src={getFileUrl(propUser.profilePic)} />
                <div>
                    <h1 className="text-blue-900">{propUser.fullName}</h1>
                    <h1 className="text-gray-500">Shared {new Date(propUser.createdAt).toLocaleDateString()}</h1>
                </div>
            </div>

            
            {post.images && <img className="w-auto max-h-[300px] mx-auto mt-1" src={getFileUrl(post.images[0])} /> }
    <p className="text-xs my-4">{post.content}</p>

            <div className="flex justify-between ">
                <div className="flex ">
                    <button className="flex mr-2"> <ShareIcon className="h-full w-3 mr-1" /> Share</button>
                    <button type="button" className="flex ">
                    <HeartIcon className="h-5 w-5 mr-1 text-red-600 hover:text-red-700 rounded-lg" /> Like
            </button>
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


 function Posts({user}) {
    const [posts, setposts] = React.useState([])
    const [loadingPost, setloadingPost] = React.useState(false)

    React.useEffect(() => {

        const asyncFunc = async () => {
            setloadingPost(true)

            const result = await getAllPostsCall()
            console.log(result)

            if(result){
                setposts(result)
            }
            setloadingPost(false)
        }

        asyncFunc()

    }, [])



    return (
        <div className="w-full mt-5">

            
        <div className="w-full px-4 py-2 bg-white mt-5">
            {loadingPost && <LoaderComponent /> }
            {posts?.length === 0 && !loadingPost && <h1> No post yet </h1>}
        </div>

            {posts?.map((post) => <Post key={post._id} post={post} propUser={user} />)}

        
            
        </div>
    )
}

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



function Footer() {
    return (
        <div className="p-3 bg-red-900 mt-auto">

            <p>
            Copyright © Richard Bathiebo - All rights reserved 
            </p>
            
        </div>
    )
}


function LoaderComponent() {
    return (
        <div className="w-full flex items-center flex-col">
        <div className="flex bg-white shadow-md p-4 rounded-md">
          <div data-placeholder className="mr-2 h-20 w-20 rounded-full overflow-hidden relative bg-gray-200">
          </div>
          <div className="flex flex-col justify-between">
            <div data-placeholder className="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200">
            </div>
            <div data-placeholder className="h-10 w-40 overflow-hidden relative bg-gray-200">
            </div>
          </div>
        </div>
      </div>
        
    )
}



function Profile({user}) {

    // React.useEffect(() => {
    //     console.log("state" , user)
    //     // if(!user) return Router.push("/login?from=profile")

    //     toast(`Vous  êtes bien connecté , ${user?.email}`)
        
    //   }, [])

    return (
      <PagesLayout>
            <div>

{user && 

   <div className="bg-repeat-y bg-cover " style={{
       backgroundImage : "url('/bg-gray.webp')",
       height : "100vh"
   }}>

        <div className="lg:mx-44 sm:pt-5 min-h-[100vh] ">
            <HeadSection user={user} />

                <div className="lg:flex">
                    <div className="lg:mr-6 lg:min-w-[40%]">
                        <AboutSection user={user} />

                        <FriendsSection user={user} />
                    </div>


                    { <Posts user={user} />}

                   
                </div>

         </div>
            <Footer />


</div>

}
<ToastContainer />
</div>

      </PagesLayout>
    )
}


const mapStateToProps = state => {
   return ({
        user: state.user.value
    })
};

const mapDispatchToProps = {
};

Profile = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default Profile;

