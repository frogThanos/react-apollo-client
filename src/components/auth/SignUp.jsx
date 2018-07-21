import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';
import {
  FormContainer,
  FromTitle,
  Form,
  FormInput,
} from './styled';
import Error from './Error';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

class SignUp extends PureComponent {
  state = { ...initialState };

  handleChange = (event) => {
    if (event) {
      const { name, value } = event.target;
      console.log(name, ':', value);
      this.setState({ [name]: value });
    }
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleSubmit = (event, signUpUser) => {
    event.preventDefault();
    signUpUser().then((data) => {
      console.log(data);
      this.clearState();
    });
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
        <Mutation
          mutation={SIGNUP_USER}
          variables={{
            username,
            email,
            password,
          }}
        >
          {(signUpUser, { data, loading, error }) => {
            return (
              <Form onSubmit={event => this.handleSubmit(event, signUpUser)}>
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
                {error && <Error error={error} />}
              </Form>
            );
          }}
        </Mutation>
      </FormContainer>
    );
  }
}

export default SignUp;
