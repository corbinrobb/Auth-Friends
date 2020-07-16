import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({ name, email, age, id, setFriends, friends, setFriendToEdit }) => {
  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    setFriends(friends.filter(friend => friend.id !== id))
  }

  return (
    <div className="ui card">
      <div className="content">
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{email}</p>
      </div>
      <div className="content">
        <button className="ui green button" onClick={() => setFriendToEdit({ id, name, age, email })}>Edit</button>
        <button className="ui red button" onClick={() => deleteFriend(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Friend;