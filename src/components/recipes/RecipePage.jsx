import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries';

const RecipePage = ({ match: { params: { _id } } }) => (
  <Query query={GET_RECIPE} variables={{ _id }}>
    {({ data, loading, error }) => {
      if (loading) return <div>...loading...</div>;
      if (error) return <div>...error...</div>;
      console.log(data);
      const {
        name,
        category,
        description,
        instructions,
        likes,
        username,
      } = data.getRecipe;
      return (
        <RecipePageContainer>
          <h2>{name}</h2>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <p>Instructions: {instructions}</p>
          <p>Likes: {likes}</p>
          <p>Created by: {username}</p>
          <button type="button">
            like
          </button>
        </RecipePageContainer>
      );
    }}
  </Query>
);

const RecipePageContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default withRouter(RecipePage);
