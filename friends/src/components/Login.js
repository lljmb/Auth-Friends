import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

    const history = useHistory();

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            history.push('/protected');
        })
        .catch(err => {
            console.log('Login error: ', err)
        })
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