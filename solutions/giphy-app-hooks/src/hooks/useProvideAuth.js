import { useState } from 'react'

function useProvideAuth() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const signin = ({ username, password }, cb) => {
       setUser({ username, password })
       localStorage.setItem('user', JSON.stringify({ username, password }))
       cb()
    }

    const signout = (cb) => {
        setUser(null)

        localStorage.removeItem('user')
        cb()
    }

    return {
        user,
        signin,
        signout
    }
}

export default useProvideAuth