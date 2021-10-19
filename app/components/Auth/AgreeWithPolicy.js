import React from 'react'

function AgreeWithPolicy() {
    return (
        <div>
            <label className="inline-flex items-center cursor-pointer">
            <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                I agree with the
                <a className="ml-1 text-pink-500">
                Privacy Policy
                </a>
            </span>
            </label>
        </div>
    )
}

export default AgreeWithPolicy
