import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({ name, email, age, id, setFriends, friends }) => {
  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    setFriends(friends.filter(friend => friend.id !== id))
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{email}</p>
      <button onClick={() => deleteFriend(id)}>Delete</button>
    </div>
  );
}

export default Friend;