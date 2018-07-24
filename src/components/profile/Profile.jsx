import React from 'react';
import { MainAppContainer } from '../../styled';

// Components
import UserInfo from './UserInfo';
import UserRecipes from './UserRecipes';

const Profile = ({ session }) => (
  <MainAppContainer>
    Profile
    <UserInfo session={session} />
    <UserRecipes username={session.getCurrentUser.username} />
  </MainAppContainer>
);

export default Profile;
