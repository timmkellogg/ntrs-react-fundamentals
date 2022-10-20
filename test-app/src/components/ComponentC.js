import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function ComponentC() {
    const user = useContext(UserContext)
    console.log(user)
    
    return (
        <div>
            {user.username}
        </div>
    )
}

export default ComponentC