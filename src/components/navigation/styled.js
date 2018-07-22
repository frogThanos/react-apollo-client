import styled from 'styled-components';

export const MainNav = styled.nav`
  background-color: #e74c3c;
  height: 60px;
  text-align: center;
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding-top: 15px;
`;

export const LinkItem = styled.li`
  flex: 1;
  a {
    text-decoration: none;
    color: white;
  }
`;
