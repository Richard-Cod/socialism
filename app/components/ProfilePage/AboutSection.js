import React from 'react'

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
export default AboutSection
