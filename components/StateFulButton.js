import React from 'react'

function StateFulButton({isActionIn , title ,  ...props}) {
    return (
        <button {...props} disabled={isActionIn}  type="submit">
            {isActionIn ? "loading ...": title }
        </button>
)
}

export default StateFulButton
