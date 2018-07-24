import { gql } from 'apollo-boost';

// User queries
export const GET_CURRENT_USER = gql`
  query {
      getCurrentUser {
          username
          email
          joinDate
          favorites {
              _id
              name
          }
      }
  }
`;

// Recipe queries
export const GET_ALL_RECIPES = gql`
  query {
      getAllRecipes {
          _id
          name
          category
      }
  }
`;

export const GET_RECIPE = gql`
    query($_id: ID!) {
        getRecipe(_id: $_id) {
            _id
            name
            category
            description
            instructions
            createdDate
            likes
            username
        }
    }
`;

export const SEARCH_RECIPES = gql`
  query($searchTerm: String) {
      searchRecipes(searchTerm: $searchTerm) {
          _id
          name
          likes
      }
  }
`;

// Recipe mutation

export const ADD_RECIPE = gql`
  mutation($name: String!, $category: String!, $description: String!, $instructions: String!, $username: String,) {
      addRecipe(
          name: $name,
          category: $category,
          description: $description,
          instructions: $instructions,
          username: $username
      ) {
          _id
          name
          category
          description
          instructions
          createdDate
          likes
          username
      }
  }
`;

// User mutations

export const SIGN_UP_USER = gql`
    mutation($username: String!, $email: String!, $password: String!) {
        signUpUser(username: $username, email: $email, password: $password) {
            token
        }
    }
`;

export const SIGN_IN_USER = gql`
    mutation($username: String!, $password: String!) {
        signInUser(username: $username, password: $password) {
            token
        }
    }
`;
