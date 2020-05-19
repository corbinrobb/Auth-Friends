import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendList = () => {
  const [ friends, setFriends ] = useState([]);
  const [friendToEdit, setFriendToEdit] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <FriendForm 
        setFriends={setFriends} 
        friendToEdit={friendToEdit} 
        setFriendToEdit={setFriendToEdit} 
      />
      <div className="friend-list">
        {friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              {...friend}
              friends={friends}
              setFriends={setFriends}
              setFriendToEdit={setFriendToEdit}
            />
          )
        })}
      </div>
    </>
  );
}

export default FriendList;