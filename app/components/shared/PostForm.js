import React, { useEffect, useState } from 'react'

import CInput from './CInput'
import FileInput from './FileInput'
import StateFulButton from "./StateFulButton"
import createPostCall from '../../services/posts/createPostCall'
import Joi from 'joi'
import { toast } from 'react-toastify'


const validateInput = (data) => {
    const postInputSchema = Joi.object({
        title: Joi.string()
                 .required(),
        content: Joi.string().min(3)
                 .required(),
    })

    const { error } = postInputSchema.validate(data);
    return error
}


function PostForm() {
    const [title, setTitle] = useState("")
    const [content, setcontent] = useState("")

    const [files, setFiles] = useState();
    const saveFile = (e) => {
        setFiles(e.target.files);
    };


    const handleFormSubmit = async  (e) => {
        e.preventDefault()
        const data = {title , content}


        const error = validateInput(data)
        if(error){
            toast(error.details[0].message)
            return
        }

        const result = await createPostCall({...data , files})
        console.log(result)

        if(result){
            //
        }

    }

   
     function UploadedImagesPreview({files}) {
         console.log(files)

        return (
            <div>
                 {files && <div className="flex">

                    {Array.from(files).map((file) => {
                        return <img className="h-10 w-10 mr-2 mb-1 border-4" src={URL.createObjectURL(file)} />
                    })}

                </div>}
            </div>
        )
    }
    
    

    return (

        <div>
            <h5 className="text-center">Write your post</h5>

            <form onSubmit={handleFormSubmit}>
                <CInput setValue={setTitle} value={title} label="title" placeholder="title" />
                <CInput setValue={setcontent} value={content} label="Content" placeholder="content" />

                <UploadedImagesPreview files={files} />
                <FileInput textLabel="Choose image" htmlFor="postImages" saveFile={saveFile} multiple />

                <StateFulButton title="Create" isActionIn={false} />
            </form>

        </div>
    )
}

export default PostForm
