import { createContext } from 'react'

const UserContext = createContext({ username: '', firstName: '', lastName: ''})

export default UserContext