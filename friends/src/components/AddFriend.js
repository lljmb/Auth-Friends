import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
}

// pass the setFriends state as a prop in order to render friends on page
const AddFriend = ({setFriends}) => {
    const [newFriend, setNewFriend] = useState(initialValues)

    const submit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res)
            setFriends(res.data)
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
             name='name'
             value={newFriend.name}
             onChange={handleChange} 
             placeholder='enter a name'
            />
            <input 
             type='number'
             name='age'
             value={newFriend.age}
             onChange={handleChange} 
             placeholder='enter their age'
            />
            <input 
             type='text'
             name='email'
             value={newFriend.email}
             onChange={handleChange} 
             placeholder='enter their email'
            />
            <button>Create A New Friend</button>
        </form>
        </>
    )
}

export default AddFriend