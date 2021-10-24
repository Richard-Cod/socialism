import React from 'react'

import { UserCircleIcon } from '@heroicons/react/solid'
import { UserGroupIcon } from '@heroicons/react/solid'
import { PhotographIcon } from '@heroicons/react/solid'

import FileUpload from '../shared/FileUpload'
import getFileUrl from "../../utils/getFileUrl"
import IconLink from './IconLink'

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


export default HeadSection
