import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendList = () => {
  const [ friends, setFriends ] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <FriendForm friends={friends} setFriends={setFriends} />
      {friends.map(friend => {
        return <Friend {...friend} friends={friends} setFriends={setFriends} />
      })}
    </>
  );
}

export default FriendList;