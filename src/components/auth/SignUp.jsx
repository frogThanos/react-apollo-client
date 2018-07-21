import React, { PureComponent } from 'react';
import {
  FormContainer,
  FromTitle,
  Form,
  FormInput,
} from './styled';

class SignUp extends PureComponent {
  render() {
    return (
      <FormContainer>
        <FromTitle>
          SignUp
        </FromTitle>
        <Form>
          <FormInput
            type="text"
            name="username"
            placeholder="Username"
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormInput
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm your password"
          />
          <button type="submit">
            Submit
          </button>
        </Form>
      </FormContainer>
    );
  }
}

export default SignUp;
