import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import App from '../App';

class MainRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={App} />
          <Route to="/signin" exact component={App} />
          <Route to="/signup" exact component={App} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
