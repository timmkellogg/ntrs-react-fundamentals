import { useState, useEffect } from 'react'

function SavedPage(props) {
    const [username, setUsername] = useState('')

    useEffect(() => {
        // on mount AND update
        console.log('mounted or updated')

        
    }, [username]) // < -- dependencies

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div>
            <input name='username' value={username} onChange={handleChange} />
            <button onClick={() => props.handleLogin(username)}>login</button>
            <div>
                User: {JSON.stringify(props.user)}
            </div>
        </div>
    )
}

export default SavedPage