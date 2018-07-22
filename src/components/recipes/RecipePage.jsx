import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries';

const RecipePage = ({ match: { params: { _id } } }) => (
  <Query query={GET_RECIPE} variables={{ _id }}>
    {({ data, loading, error }) => {
      if (loading) return <div>...loading...</div>;
      if (error) return <div>...error...</div>;
      console.log(data);
      return (
        <div>
          Recipe page
        </div>
      );
    }}
  </Query>
);

export default withRouter(RecipePage);
