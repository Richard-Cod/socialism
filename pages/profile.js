import React from 'react'
import manageJwtToken from '../utils/manageJwtToken'
import { MenuIcon } from '@heroicons/react/solid'
import { UserCircleIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/solid'
import { PhotographIcon } from '@heroicons/react/solid'
import { ShareIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/solid'

function MobileButtonNav({...props}) {
    const [showContent, setshowContent] = React.useState(false)
    const element = [
        {name : "Home" , url : "/home"},
        {name : "Profile" , url : "/profile"},
        {name : "Log out" , url : "/profile"},
    ]
    return (
        <div style={{
        }} className="relative  text-left md:hidden  ">
    <div>
        <button onClick={() => setshowContent(!showContent)} type="button" className=" bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center  rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 ml-auto" id="options-menu">
             <MenuIcon className="h-5 w-5"/> 
        </button>
    </div>
    <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
    style={{
        display : showContent ? "block" : "none"
    }}>
        
        <div  className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            
            {element.map((value) => 
            <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
            <span className="flex flex-col">
                <span>
                    {value.name} 
                </span>
            </span>
        </a>
        )}
        </div>

    </div>
</div>
    )
}

function NavBar() {
    return (
        <nav className="bg-gray-100 py-5 px-10 flex">

            <div>
             <h1 className="border-solid border-2">DayDay</h1>
            </div>
            <div className="menu  ml-auto  w-1/2 ">

                <ul className="hidden justify-between md:flex">
                    <li>Profile</li>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Deconnexion</li>
                </ul>

                <MobileButtonNav />

            </div>

            
        </nav>
    )
}



function IconLink({value , Icon , currentTab = "TimeLine" }) {
    console.log(Icon)

    let className = `
    flex items-center 
            text-sm border-black-100 border-t-[3px] 
            border-solid py-1 sm:border-r-2 sm:border-t-0
            sm:pr-10
            hover:text-black hover:text-lg duration-75 cursor-pointer `
    
    className += value.name !== currentTab && " text-gray-400 "
    return (
            <li className={className}> {Icon({className : "h-6 w-6 text-lg mr-2"})} {value.name} </li>
    )
}


function HeadSection({user}) {
    const elements = [
        {name : "TimeLine" , icon :  PhotographIcon},
        {name : "About" , icon : UserCircleIcon},
        {name : "Friends" , icon : UserGroupIcon},
        {name : "Photos" , icon : PhotographIcon},
    ]
    return (
        <div>
            <div className="border-red-100 border-4 border-solid  bg-no-repeat lg:hidden">
                <img className="w-full max-h-[300px]" src={"/profile-cover.jpg"} />
            </div>

            <div className="bg-gray-100 h-[100px] flex  text-black border-4 border-blue-200 border-solid ">
             
                    <img className="rounded-md h-20 w-20 border-4 border-gray-100 ml-3"   src={"/guy-3.jpg"} />

                    <div style={{
                    }} className="ml-4 flex flex-col pb-3 text-xl  w-full justify-center sm:justify-between ">

                        {/* <div>1</div>
                        <div>2</div>
                        <div>3</div> */}
                        <div>
                            <h1 className="">Richard Bathiebo</h1>
                        </div>

                        <div className="">
                            <ul style={{
                            }} className="hidden sm:flex justify-between max-w-[500px]">
                                {elements.map((value) => <IconLink value={value} Icon={value.icon} /> )}                               
                            </ul>
                        </div>

                    </div>
               
            </div>
            <ul className="pl-3 sm:hidden">
                {elements.map((value) => <IconLink value={value} Icon={value.icon} /> )}                               
            </ul>
        </div>
    )
}


 function AboutSection() {
     const elements = [
         {title : "Date of Birth" , content  : "12 January 1990"},
         {title : "Job" , content  : "Ninja developer"},
         {title : "Gender" , content  : "Male"},
         {title : "Lives in" , content  : "Miami, FL, USA"},
     ]
    return (
        <div className="bg-gray-100 pl-4">
            <h2 className="border-solid border-b-4 border-blue-200">About</h2>

            {elements.map(({title , content}) => {
                
           return     <div className="py-1">
                    <p className="text-gray-400 text-sm">{title}</p>
                    <p className="text-gray-900 text-sm">{content}</p>
                </div>
            })}
            
        </div>
    )
}


 function FriendsSection() {
    return (
        <div>
            <h2 className="border-solid border-b-4 border-blue-200">Friends</h2>

           <div className="flex flex-wrap">
           {[1,2,3 , 4 ,5 ,6 , 7 , 8].map((value) => {
                return <img className="ml-1 mb-1 h-[75px] w-[75px]" src="/guy-3.jpg" />
            })}
           </div>

            
        </div>
    )
}


function Post() {
    return (
        <div className="border-solid border-red-900 border-4 px-2 py-2 ">

            <div className="flex">
                <img className="rounded-full h-[50px] w-[50px] mr-4 " src="/guy-3.jpg" />
                <div>
                    <h1 className="text-blue-900">John Bressdkjskdjbsk</h1>
                    <h1 className="text-gray-500">Shared 7:30 PM today</h1>
                </div>
            </div>

            <img className="w-auto mt-4" src="/profile-cover.jpg" />
            <p className="text-sm my-4">I took this photo this morning. What do you guys think?</p>

            <div className="flex justify-between ">
                <div className="flex ">
                    <button className="flex mr-2"> <ShareIcon className="h-5 w-5 mr-1" /> Share</button>
                    <button type="button" class="flex ">
                    <HeartIcon className="h-5 w-5 mr-1 text-red-600 hover:text-red-700 rounded-lg text-white" /> Like
            </button>
                </div>

                <div className=''>
                127 likes - 3 comments
                </div>
            </div>

            {[1,2,4].map((value) => <Comment />)}

            <CommentForm />
            
        </div>
    )
}


 function Posts() {
    return (
        <div>

            {[1,2].map((value) => <Post />)}
            
        </div>
    )
}

function Comment() {
    return (
            <div className="flex p-2">
                <img src='/guy-3.jpg' className="rounded-full h-10 w-10 mr-2" />
                <div>
                    <h1 className="text-black font-bold">Maria Gonzales</h1>
                    <p className="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
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
        <div className="p-3 bg-indigo-100">

            <p>
            Copyright © Richard Bathiebo - All rights reserved 
            </p>
            
        </div>
    )
}


function Profile() {
    const [user, setUser] = React.useState()
    React.useEffect(() => {
        const user = manageJwtToken.getUserFromLocalStorage()
        console.log(user)
        setUser(user)
        
      }, [])

    return (
        <div>

            <NavBar />

            {user && 

                <div>
                    <HeadSection user={user} />

                    <AboutSection />

                    <FriendsSection />

                    <Posts />

                    <Footer />

                    
                </div>
            
            }
            
        </div>
    )
}

export default Profile
