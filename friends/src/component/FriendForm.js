import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = ({ friends, setFriends }) => {
  const [ newFriend, setNewFriend ] = useState({ name: '', age: '', email: ''});

  const submitFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))

    setNewFriend({ name: '', age: '', email: '' });
  }

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: (e.target.name === 'age') ? Number(e.target.value) : e.target.value,
    })
  }

  return (
    <form onSubmit={submitFriend}>
      <input
        name="name"
        placeholder="name"
        value={newFriend.name}
        onChange={handleChange}
      />
      <input 
        name="age"
        placeholder="age"
        value={newFriend.age}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="email"
        value={newFriend.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default FriendForm;