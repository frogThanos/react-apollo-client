import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import {
  MainAppContainer,
  FromTitle,
  Form,
  FormInput,
  FormSelect,
  FromTextArea,
} from '../../styled';
import { ADD_RECIPE } from '../../queries';
import Error from '../auth/Error';

const initialState = {
  name: '',
  category: 'Breakfast',
  description: '',
  instructions: '',
  username: '',
};

class AddRecipe extends PureComponent {
  state = { ...initialState };

  componentDidMount() {
    const { username } = this.props.session.getCurrentUser;
    if (username) {
      this.setState({ username });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, ':', value);
    this.setState({ [name]: value });
  };

  handleSubmit = (event, addRecipe) => {
    const { history } = this.props;
    event.preventDefault();
    addRecipe().then(() => {
      console.log('addRecipe');
      this.clearState();
      history.push('/');
    });
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  validateForm = () => {
    const {
      name,
      category,
      description,
      instructions,
    } = this.state;
    const isInvalid = !name || !category || !description || !instructions;
    return isInvalid;
  };

  updateCache = (cache, data) => {
    console.log('updateCache', cache, data);
  };

  render() {
    const {
      name,
      category,
      description,
      instructions,
      username,
    } = this.state;
    return (
      <MainAppContainer>
        <FromTitle>AddRecipe</FromTitle>
        <Mutation
          mutation={ADD_RECIPE}
          variables={{
            name,
            category,
            description,
            instructions,
            username,
          }}
          update={this.updateCache}
        >
          {(addRecipe, { loading, error }) => {
            return (
              <Form onSubmit={(event) => this.handleSubmit(event, addRecipe)}>
                <FormInput
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Recipe name"
                  onChange={this.handleChange}
                />
                <FormSelect
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                </FormSelect>
                <FormInput
                  type="text"
                  name="description"
                  value={description}
                  placeholder="description"
                  onChange={this.handleChange}
                />
                <FromTextArea
                  name="instructions"
                  value={instructions}
                  placeholder="instructions"
                  onChange={this.handleChange}
                />
                <button
                  type="submit"
                  disabled={loading || this.validateForm()}
                >
                  create recipe
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

export default withRouter(AddRecipe);
