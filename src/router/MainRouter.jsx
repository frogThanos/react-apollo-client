import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Components
import App from '../App';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

class MainRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={App} />
          <Route to="/signin" exact component={SignIn} />
          <Route to="/signup" exact component={SignUp} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
