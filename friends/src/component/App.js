import React from 'react';
import Login from './login';
import { Route } from 'react-router-dom';
import FriendList from './FriendsList';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <div className="ui container">
      <Route exact path="/">
        <Login />
      </Route>
      <ProtectedRoute path="/friends" component={FriendList} />
    </div>
  );
}

export default App;