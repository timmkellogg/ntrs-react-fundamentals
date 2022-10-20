import { useState } from 'react'
import { useAuth } from './contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

function LoginPage() {
    const auth = useAuth() // returns { user, signin(), signout }
    const navigate = useNavigate()
    const location = useLocation() 
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let { from } = location.state || { from: { pathname: '/' }}
    
    const login = (e) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
        
        // pass user object and callback
        auth.signin({ username, password }, () => {
            navigate(from) // navigate to original destination
        })
    }

    return (
        <div>
            <form onSubmit={login}>
                <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>login</button>
            </form>
        </div>
    )
}

export default LoginPage