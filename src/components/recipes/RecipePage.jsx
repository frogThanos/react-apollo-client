import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries';
import { MainAppContainer } from '../../styled';
import LikeRecipe from './LikeRecipe';

const RecipePage = ({ match: { params: { _id } } }) => (
  <Query query={GET_RECIPE} variables={{ _id }}>
    {({ data, loading, error }) => {
      if (loading) return <div>...loading...</div>;
      if (error) return <div>...error...</div>;
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
          <LikeRecipe />
        </MainAppContainer>
      );
    }}
  </Query>
);

export default withRouter(RecipePage);
