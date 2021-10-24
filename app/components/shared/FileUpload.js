import React, { useState } from "react";
import axios from "axios";
import handleApiCallErrors from "../../utils/handleApiCallErrors";
import manageJwtToken from "../../utils/manageJwtToken";
import { toast } from "react-toastify";
import { PhotographIcon  } from '@heroicons/react/solid'
import createPostCall from "../../services/posts/createPostCall";
import updateCovOrProfilPic from "../../services/users/updateCovOrProfPic";


function FileUpload({type , title , ...props}) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  React.useEffect(() => {

    if(file){
        uploadFile()
    }
     
  }, [file])

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    if(!file) return toast("Select a file")
    await updateCovOrProfilPic(type , file , fileName)
    
  };

  return (
    <div {...props}>
            {fileName || ""}
        <label className="cursor-pointer " htmlFor={type}>
            <PhotographIcon className="w-5 h-w-5 text-white-900  hover:text-red-700" />
        </label>
      <input className="hidden" id={type} type="file" onChange={saveFile} />
     </div>
  );
}

export default FileUpload;