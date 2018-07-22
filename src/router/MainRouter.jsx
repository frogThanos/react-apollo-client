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
import Search from '../components/recipes/Search';
import AddRecipe from '../components/recipes/AddRecipe';
import Profile from '../components/profile/Profile';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

class MainRouter extends PureComponent {
  render() {
    const { refetch, session } = this.props;
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation session={session} />
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/recipe/add" component={AddRecipe} />
            <Route path="/profile" component={Profile} />
            <Route path="/search" component={Search} />
            <Route path="/signin" render={() => <SignIn refetch={refetch} />} />
            <Route path="/signup" render={() => <SignUp refetch={refetch} />} />
            <Redirect to="/" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
