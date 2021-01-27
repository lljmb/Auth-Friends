import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = {
    id: Date.now(),
    newName: '',
    age: '',
    email: ''
}

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState(initialValues)

    const submit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log('Add Friend error: ', err)
        })
        
    }
    
    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    return(
        <>
         <form onSubmit={submit}>
            <input 
             type='text'
             name='newName'
             value={setNewFriend.newName}
             onChange={handleChange} 
             placeholder='enter a name'
            />
            <input 
             type='number'
             name='age'
             value={setNewFriend.age}
             onChange={handleChange} 
             placeholder='enter their age'
            />
            <input 
             type='text'
             name='email'
             value={setNewFriend.email}
             onChange={handleChange} 
             placeholder='enter their email'
            />
            <button>Create A New Friend</button>
        </form>
        </>
    )
}

export default AddFriend