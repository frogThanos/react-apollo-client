import React from 'react';
import styled from 'styled-components';

const RecipeItem = ({ name, category }) => (
  <RecipeItemStyled>
    <h4>{name}</h4>
    <p><strong>{category}</strong></p>
  </RecipeItemStyled>
);

const RecipeItemStyled = styled.li`
  list-style: none;
`;

export default RecipeItem;
