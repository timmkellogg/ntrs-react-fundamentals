import { createContext, useContext } from 'react'

// Import useProvideAuth() hook that returns { user, signin, signout }
import useProvideAuth from '../hooks/useProvideAuth'

const authContext = createContext(null)

function AuthProvider({ children }) {
    // auth = { user, signin, signout }
    const auth = useProvideAuth()

    // Pass auth as value of authContext.Provider
    // value = { user, signin, signout }
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

// Create useAuth() hook to access useProvideAuth() hook from context
function useAuth() {
    return useContext(authContext)
}

//Export AuthProvider (to be used as as wrapped in src/App.js) and useAuth() hook 
export { AuthProvider, useAuth }