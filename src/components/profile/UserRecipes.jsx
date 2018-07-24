import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_USER_RECIPES } from '../../queries';

const UserRecipes = ({ username }) => (
  <Query query={GET_USER_RECIPES} variables={{ username }}>
    {({ data, loading, error}) => {
      if (loading) return <div>...loading...</div>;
      if (error) return <div>...error...</div>;
      console.log('UserRecipes: ', data);
      return (
        <div>
          <h3>Your Recipes</h3>
          <ul style={{ listStyle: 'none' }}>
            {data.getUserRecipes.map((recipe) => (
              <li key={recipe._id}>
                <Link to={`/recipes/${recipe._id}`}>
                  <p>{recipe.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default UserRecipes;
