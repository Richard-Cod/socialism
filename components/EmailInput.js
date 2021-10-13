import React from 'react'

function EmailInput({value , setValue}) {
    return (
        <div>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
            value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default EmailInput