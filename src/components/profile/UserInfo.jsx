import React from 'react';
import { Link } from 'react-router-dom';

const formatDate = (date) => {
  if (date) {
    const newDate = new Date(date).toLocaleDateString('nl-NL');
    const newTime = new Date(date).toLocaleTimeString('nl-NL');
    return `${newDate} at ${newTime}`;
  }
};

const UserInfo = ({ session }) => (
  <div>
    <h3>User Info</h3>
    <p>Username: {session.getCurrentUser.username}</p>
    <p>Email: {session.getCurrentUser.email}</p>
    <p>JoinDate: {formatDate(session.getCurrentUser.joinDate)}</p>
    <ul>
      <h3>{session.getCurrentUser.username}'s Favorites</h3>
      {session.getCurrentUser.favorites.map((favorite) => (
        <li key={favorite._id}>
          <Link to={`/recipes/${favorite._id}`}>
            <p>{favorite.name}</p>
          </Link>
        </li>
      ))}
      {!session.getCurrentUser.favorites.length && <p>There are no favorites, please add some!</p>}
    </ul>
  </div>
);

export default UserInfo;
