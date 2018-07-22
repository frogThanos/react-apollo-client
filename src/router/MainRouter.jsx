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
    const { refetch } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signin" exact render={() => <SignIn refetch={refetch} />} />
          <Route path="/signup" exact render={() => <SignUp refetch={refetch} />} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
