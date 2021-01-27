import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AddFriend from './AddFriend';

const FriendsList = () => { 
    const [friends, setFriends] = useState([])

    useEffect(() => {
        getData()
    }, [])

    // getData loads in all of the friends data 
    const getData = () => {
        // make axios call
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                // get auth token
                authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            // set the state of friends to the response
            setFriends(res.data)
        })
        .catch(err => {
            console.log('Friends List error: ', err)
        })

    }

    return( 
        <>
        <h2>Friends!</h2>
        {
            friends.map(friend => (
                <div key={friend.id}>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                </div>
            ))
        }
        <h3>How Many of Us Have Them?</h3>
        {/* link setFriends prop to setFriends state */}
        <AddFriend setFriends={setFriends}/>
        </>
    )
}

export default FriendsList