import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries';
import { MainAppContainer } from '../../styled';

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
        <MainAppContainer>
          <h2>{name}</h2>
          <p>Category: {category}</p>
          <p>Description: {description}</p>
          <p>Instructions: {instructions}</p>
          <p>Likes: {likes}</p>
          <p>Created by: {username}</p>
          <button type="button">
            like
          </button>
        </MainAppContainer>
      );
    }}
  </Query>
);

export default withRouter(RecipePage);
