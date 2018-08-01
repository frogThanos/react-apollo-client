import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RecipeItem = ({ _id, imageUrl, name, category }) => (
  <RecipeItemStyled imageUrl={imageUrl}>
    <Link to={`/recipes/${_id}`}>
      <h4>{name}</h4>
    </Link>
    <p><strong>{category}</strong></p>
  </RecipeItemStyled>
);

const RecipeItemStyled = styled.li`
  list-style: none;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
`;

export default RecipeItem;
