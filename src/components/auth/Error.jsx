import React from 'react';
import { ErrorText } from '../../styled';

const Error = ({ error }) => (<ErrorText>{error.message}</ErrorText>);

export default Error;
