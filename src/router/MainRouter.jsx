import React, { PureComponent, Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Components
import App from '../App';
import Navigation from '../components/navigation/Navigation';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

class MainRouter extends PureComponent {
  render() {
    const { refetch } = this.props;
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation />
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signin" exact render={() => <SignIn refetch={refetch} />} />
            <Route path="/signup" exact render={() => <SignUp refetch={refetch} />} />
            <Redirect to="/" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
