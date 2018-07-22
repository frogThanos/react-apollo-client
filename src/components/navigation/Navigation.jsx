import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { MainNav, Links, LinkItem } from './styled';
import SignOut from '../auth/SignOut';

const active = { fontWeight: '800', textDecoration: 'underline' };

const NavBarUnAuth = () => (
  <Links>
    <LinkItem>
      <NavLink to="/" exact activeStyle={active}>
        Home
      </NavLink>
    </LinkItem>
    <LinkItem>
      <NavLink to="/search" exact activeStyle={active}>
        Search
      </NavLink>
    </LinkItem>
    <LinkItem>
      <NavLink to="/signin" exact activeStyle={active}>
        Sign In
      </NavLink>
    </LinkItem>
    <LinkItem>
      <NavLink to="/signup" exact activeStyle={active}>
        Sign Up
      </NavLink>
    </LinkItem>
  </Links>
);

const NavBarAuth = ({ session }) => (
  <Fragment>
    <Links>
      <LinkItem>
        Welcome, {session.getCurrentUser.username}
      </LinkItem>
      <LinkItem>
        <NavLink to="/" exact activeStyle={active}>
          Home
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="/search" exact activeStyle={active}>
          Search
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="/recipe/add" exact activeStyle={active}>
          Add Recipe
        </NavLink>
      </LinkItem>
      <LinkItem>
        <NavLink to="/profile" exact activeStyle={active}>
          Profile
        </NavLink>
      </LinkItem>
      <LinkItem>
        <SignOut />
      </LinkItem>
    </Links>
  </Fragment>
);


const Navigation = ({ session }) => (
  <MainNav>
    {session && session.getCurrentUser
      ? <NavBarAuth session={session} /> : <NavBarUnAuth />
    }
  </MainNav>
);

export default Navigation;
