import React, {useState} from 'react';
import axios from 'axios';

const initialValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [credentials, setCredentials] = useState(initialValues)

    const handleChange = e => {
        setCredentials({
                ...credentials, 
                [e.target.name]: e.target.value
            }
        )
    }

    const login = e => {
        e.preventDefault();
        console.log(credentials)
    }

    return (
        <>
        <form onSubmit={login}>
            <input 
             type='text'
             name='username'
             value={setCredentials.username}
             onChange={handleChange} 
            />
            <input 
             type='password'
             name='password'
             value={setCredentials.username}
             onChange={handleChange} 
            />
            <button>Log In</button>
        </form>
        </>
    )

}

export default Login