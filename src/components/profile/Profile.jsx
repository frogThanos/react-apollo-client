import React from 'react';
import { MainAppContainer } from '../../styled';

import UserInfo from './UserInfo';

const Profile = ({ session }) => (
  <MainAppContainer>
    Profile
    <UserInfo session={session} />
  </MainAppContainer>
);

export default Profile;
