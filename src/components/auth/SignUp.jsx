import React, { PureComponent } from 'react';
import {
  FormContainer,
  FromTitle,
} from './styled';

class SignUp extends PureComponent {
  render() {
    return (
      <FormContainer>
        <FromTitle>
          SignUp
        </FromTitle>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm your password"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </FormContainer>
    );
  }
}

export default SignUp;
