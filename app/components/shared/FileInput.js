import React, { useState } from "react";
import axios from "axios";
import handleApiCallErrors from "../../utils/handleApiCallErrors";
import manageJwtToken from "../../utils/manageJwtToken";
import { toast } from "react-toastify";
import { PhotographIcon  } from '@heroicons/react/solid'
import createPostCall from "../../services/posts/createPostCall";
import updateCovOrProfilPic from "../../services/users/updateCovOrProfPic";


function FileInput({htmlFor , textLabel ,saveFile , multiple = false , ...props}) {
  

  return (
    <div {...props}>
        <label className="cursor-pointer flex " htmlFor={htmlFor}>
            <PhotographIcon className="w-5 h-w-5 mr-2 text-white-900  hover:text-red-700" />
            {textLabel}
        </label>
      <input className="hidden" id={htmlFor} type="file" accept="image/*" multiple={multiple} onChange={saveFile} />
     </div>
  );
}

export default FileInput;