import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_ALL_RECIPES } from './queries';

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
              <div>
                Recipes
              </div>
            );
          }}
        </Query>
      </MainAppContainer>
    );
  }
}

const MainAppContainer = styled.div`
  text-align: center;
`;

export default App;
