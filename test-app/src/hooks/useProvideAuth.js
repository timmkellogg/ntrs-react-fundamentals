import { useState } from 'react'

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = ({ username, password }, cb) => {
       setUser({ username, password }) // set user info passed into state
       cb() // execute callback function passed 
    }

    const signout = () => {
        setUser(null) // remove user from state
       
    }


    // custom hook returns user and functions signin/signout
    return { user, signin, signout }
}

export default useProvideAuth