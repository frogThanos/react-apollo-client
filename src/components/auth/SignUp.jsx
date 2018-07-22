import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { SIGN_UP_USER } from '../../queries';
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
    const { history, refetch } = this.props;
    event.preventDefault();
    signUpUser().then(async ({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.signUpUser.token);
      await refetch();
      this.clearState();
      history.push('/');
    });
  };

  validateForm = () => {
    const {
      username,
      email,
      password,
      passwordConfirmation,
    } = this.state;

    return !username || !email || !password || password !== passwordConfirmation;
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
          mutation={SIGN_UP_USER}
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
                <button
                  type="submit"
                  disabled={loading || this.validateForm()}
                >
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

export default withRouter(SignUp);
