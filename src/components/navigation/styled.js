import styled from 'styled-components';

export const MainNav = styled.nav`
  background-color: #e74c3c;
  height: 60px;
  width: 100%;
  top: 0;
  margin: 0;
  text-align: center;
  position: fixed;
  -webkit-box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2);
  -moz-box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2);
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2);
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-top: 15px;
`;

export const LinkItem = styled.li`
  flex: 1;
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;
