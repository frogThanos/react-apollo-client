import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import {
  FormContainer,
  FromTitle,
  Form,
  FormInput,
} from './styled';

class SignUp extends PureComponent {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    if (event) {
      const { name, value } = event.target;
      console.log(name, ':', value);
      this.setState({ [name]: value });
    }
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
    } = this.state;
    return (
      <FormContainer>
        <FromTitle>
          SignUp
        </FromTitle>
        <Mutation mutation={SIGNUP_USER}>
          {() => {
            return (
              <Form>
                <FormInput
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
                <FormInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <FormInput
                  type="password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  placeholder="Confirm your password"
                  onChange={this.handleChange}
                />
                <button type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Mutation>
      </FormContainer>
    );
  }
}

export default SignUp;
