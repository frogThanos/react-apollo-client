import React from 'react';
import { withRouter } from 'react-router-dom';

const RecipePage = ({ match }) => (
  <div>
    {console.log(match.params._id)}
    RecipePage
  </div>
);

export default withRouter(RecipePage);
