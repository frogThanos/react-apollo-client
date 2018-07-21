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
          <Route path="/" exact component={App} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
