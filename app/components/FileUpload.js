import React, { useState } from "react";
import axios from "axios";
import handleApiCallErrors from "../utils/handleApiCallErrors";
import manageJwtToken from "../utils/manageJwtToken";
import { toast } from "react-toastify";
import { PhotographIcon  } from '@heroicons/react/solid'


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
    const formData = new FormData();
    if(!file) return toast("Select a file")
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/upload/"+type,
        formData , {
            headers : {
                token : manageJwtToken.getTokenFromLocalStorage()
            }
        }
      );
      manageJwtToken.saveTokenToLocalStorage(res.data.token)
      location.reload()
    } catch (e) {
      handleApiCallErrors(e)
    }
  };

  return (
    <div {...props}>
            {fileName || ""}

        <label className="cursor-pointer " htmlFor={type}>
            <PhotographIcon className="w-5 h-w-5 text-white-900  hover:text-red-700" />
        </label>
      <input className="hidden" id={type} type="file" onChange={saveFile} />
        {/* <button className="text-sm" onClick={uploadFile}>Save</button> */}
     </div>
  );
}

export default FileUpload;