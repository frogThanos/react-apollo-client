import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { SIGN_IN_USER } from '../../queries';
import {
  FromTitle,
  Form,
  FormInput,
} from './styled';
import { MainAppContainer } from '../../styled';
import Error from './Error';

const initialState = {
  username: '',
  password: '',
};

class SignIn extends PureComponent {
  state = { ...initialState };

  handleChange = (event) => {
    if (event) {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleSubmit = (event, signInUser) => {
    const { history, refetch } = this.props;
    event.preventDefault();
    signInUser().then(async ({ data }) => {
      localStorage.setItem('token', data.signInUser.token);
      await refetch();
      this.clearState();
      history.push('/');
    });
  };

  validateForm = () => {
    const {
      username,
      password,
    } = this.state;

    return !username || !password;
  };

  render() {
    const {
      username,
      password,
    } = this.state;
    return (
      <MainAppContainer>
        <FromTitle>
          SignIn
        </FromTitle>
        <Mutation
          mutation={SIGN_IN_USER}
          variables={{
            username,
            password,
          }}
        >
          {(signInUser, { loading, error }) => {
            return (
              <Form onSubmit={event => this.handleSubmit(event, signInUser)}>
                <FormInput
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <FormInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
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
      </MainAppContainer>
    );
  }
}

export default withRouter(SignIn);
