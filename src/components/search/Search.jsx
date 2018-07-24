import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import { SEARCH_RECIPES } from '../../queries';
import { MainAppContainer } from '../../styled';

class Search extends PureComponent {
  state = {
    searchResults: [],
  };

  handleChange = ({ searchRecipes }) => {
    this.setState({ searchResults: searchRecipes });
  };

  render() {
    const { searchResults } = this.state;
    return (
      <MainAppContainer>
        <ApolloConsumer>
          {(client) => {
            return (
              <Fragment>
                <input
                  type="search"
                  placeholder="Search for Recipes"
                  onChange={async (event) => {
                    event.persist();
                    const { data } = await client.query({
                      query: SEARCH_RECIPES,
                      variables: { searchTerm: event.target.value },
                    });
                    this.handleChange(data);
                  }}
                />
                <ul style={{ listStyle: 'none' }}>
                  {searchResults.map((recipe) => (
                    <li key={recipe._id}>
                      <Link to={`/recipes/${recipe._id}`}>
                        <h2>{recipe.name}</h2>
                      </Link>
                      <p>{recipe.likes}</p>
                    </li>
                  ))}
                </ul>
              </Fragment>
            );
          }}
        </ApolloConsumer>
      </MainAppContainer>
    );
  }
}

export default Search;
