import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ _id, name, likes }) => (
  <li>
    <Link to={`/recipes/${_id}`}>
      <h2>{name}</h2>
    </Link>
    <p>Links: {likes}</p>
  </li>
);

export default SearchItem;
