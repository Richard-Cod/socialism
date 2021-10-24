import React from 'react'


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





export default IconLink
