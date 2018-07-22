import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { SIGN_IN_USER } from '../../queries';
import {
  FormContainer,
  FromTitle,
  Form,
  FormInput,
} from './styled';
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
      console.log(name, ':', value);
      this.setState({ [name]: value });
    }
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleSubmit = (event, signInUser) => {
    const { history } = this.props;
    event.preventDefault();
    signInUser().then(({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.signInUser.token);
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
      <FormContainer>
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
          {(signInUser, { data, loading, error }) => {
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
      </FormContainer>
    );
  }
}

export default withRouter(SignIn);
