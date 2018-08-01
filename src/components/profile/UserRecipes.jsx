import React from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { GET_USER_RECIPES, DELETE_USER_RECIPE, GET_ALL_RECIPES, GET_CURRENT_USER } from '../../queries';

const handleDelete = (deleteUserRecipe) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
  if (confirmDelete) {
    deleteUserRecipe();
  }
};

const UserRecipes = ({ username }) => (
  <Query query={GET_USER_RECIPES} variables={{ username }}>
    {({ data, loading, error}) => {
      if (loading) return <div>...loading...</div>;
      if (error) return <div>...error...</div>;
      return (
        <div>
          <h3>Your Recipes</h3>
          {!data.getUserRecipes.length && <p>You have no recipes</p>}
          <ul style={{ listStyle: 'none' }}>
            {data.getUserRecipes.map((recipe) => (
              <li key={recipe._id}>
                <Link to={`/recipes/${recipe._id}`}>
                  <p>{recipe.name}</p>
                </Link>
                <Mutation
                  mutation={DELETE_USER_RECIPE}
                  variables={{ _id: recipe._id }}
                  refetchQueries={() => [
                    { query: GET_ALL_RECIPES },
                    { query: GET_CURRENT_USER },
                  ]}
                  update={(cache, { data: { deleteUserRecipe }}) => {
                    const { getUserRecipes } = cache.readQuery({
                      query: GET_USER_RECIPES,
                      variables: { username },
                    });
                    cache.writeQuery({
                      query: GET_USER_RECIPES,
                      variables: { username },
                      data: {
                        getUserRecipes: getUserRecipes
                          .filter(recipe => recipe._id !== deleteUserRecipe._id),
                      },
                    });
                  }}
                >
                  {(deleteUserRecipe, attrs = {}) => {
                    return (
                      <button
                        type="button"
                        onClick={() => handleDelete(deleteUserRecipe)}
                      >
                        {attrs.loading ? '...deleting...' : 'X'}
                      </button>
                    );
                  }}
                </Mutation>
              </li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default UserRecipes;
