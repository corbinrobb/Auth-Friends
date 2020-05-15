import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';

const Login = () => {
  const [ user, setUser ] = useState({ username: '', password: '' });
  const { push } = useHistory(); 

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const submitUser = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => localStorage.setItem('token', JSON.stringify(res.data.payload)))
      .catch(err => console.log(err))
    push('/friends')
  }

  return (
    <form onSubmit={submitUser} className="ui segment raised login">
      <input
        name="username"
        className="ui input"
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        name="password"
        className="ui input"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <button className="ui button">Login</button>
    </form>
  );
}

export default Login;