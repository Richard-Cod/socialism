import React from 'react'

function StateFulButton({isActionIn , title ,  ...props}) {
    return (
        <div {...props} disabled={isActionIn}  type="submit" className="text-center mt-6">
                  <button className="bg-blueGray-800 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 text-black" type="submit">
                        {isActionIn ? "loading ...": title }
                  </button>
        </div>

)
}

export default StateFulButton
