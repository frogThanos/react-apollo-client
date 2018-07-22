import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainNav, Links, LinkItem } from './styled';

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

const NavBarAuth = () => (
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
      <button type="button">
        Sign Out
      </button>
    </LinkItem>
  </Links>
);


const Navigation = () => (
  <MainNav>
    <NavBarAuth />
  </MainNav>
);

export default Navigation;
