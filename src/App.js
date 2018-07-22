import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_RECIPES } from './queries';
import { MainAppContainer } from './styled';
import RecipeItem from './components/recipes/RecipeItem';

class App extends Component {
  render() {
    return (
      <MainAppContainer>
        <h1>
          Home
        </h1>
        <Query query={GET_ALL_RECIPES}>
          {({ data, loading, error }) => {
            if (loading) {
              return (
                <div>
                  ...Loading...
                </div>
              );
            }
            if (error) {
              return (
                <div>
                  ...Error...
                </div>
              );
            }
            console.log(data);
            return (
              <ul>
                {data.getAllRecipes.map((recipe) => (
                  <RecipeItem
                    key={recipe._id}
                    {...recipe}
                  />
                ))}
              </ul>
            );
          }}
        </Query>
      </MainAppContainer>
    );
  }
}

export default App;
