import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValues = {
    username: '',
    password: ''
}

const Login = () => {
    // setting the inital state of credentials
    const [credentials, setCredentials] = useState(initialValues)

    // change handler that loads changes to form
    const handleChange = e => {
        setCredentials({
                ...credentials, 
                [e.target.name]: e.target.value
            }
        )
    }

    // login function using useHistory provided by re-ro-dom
    // linked to login button & uses axios to submit post req
    const history = useHistory();

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            history.push('/friends');
        })
        .catch(err => {
            console.log('Login error: ', err)
        })
    }

    return (
        // simple form that takes a username & password
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
             value={setCredentials.password}
             onChange={handleChange} 
            />
            <button>Log In</button>
        </form>
        </>
    )

}

export default Login