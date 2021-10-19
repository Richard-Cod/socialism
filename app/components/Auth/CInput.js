import React from 'react'

function CInput({value , setValue , type , placeholder , label, ...props}) {
    return (
        <div {...props} className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">{label || 'label'}</label>
                  <input value={value} onChange={(e) => setValue(e.target.value)} type={type || "text"} 
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder={placeholder || "placeholder"} />
        </div>
    )
}

export default CInput
