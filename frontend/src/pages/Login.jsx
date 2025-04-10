import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Logging in with', username, password)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type = "text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />    
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type = "password"
                        id = "password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />    
                </div>
                <button type="submit">Login</button>
            </form>   
        </div>
    )
}

export default Login;