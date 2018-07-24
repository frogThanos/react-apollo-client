import React, { PureComponent, Fragment } from 'react';
import { ApolloConsumer } from 'react-apollo';
import SearchItem from './SearchItem';
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
                    <SearchItem key={recipe._id} {...recipe} />
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
