import { gql } from 'apollo-boost';

// Recipe queries
export const GET_ALL_RECIPES = gql`
  query {
      getAllRecipes {
          name
          description
          instructions
          category
          likes
          createdDate
      }
  }
`;

// Recipe mutation

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
