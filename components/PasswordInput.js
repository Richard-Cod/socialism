

import React from 'react'

function PasswordInput({value , setValue}) {
    return (
        <div>
             <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
         value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default PasswordInput