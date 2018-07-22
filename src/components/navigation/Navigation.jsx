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


const Navigation = () => (
  <MainNav>
    <NavBarUnAuth />
  </MainNav>
);

export default Navigation;
