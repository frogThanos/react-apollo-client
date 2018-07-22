import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import {
  MainAppContainer,
  FromTitle,
  Form,
  FormInput,
  FormSelect,
  FromTextArea,
} from '../../styled';

class AddRecipe extends PureComponent {
  state = {
    name: '',
    category: 'Breakfast',
    description: '',
    instructions: '',
    username: '',
  };

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

  render() {
    const {
      name,
      category,
      description,
      instructions,
    } = this.state;
    return (
      <MainAppContainer>
        <FromTitle>AddRecipe</FromTitle>
        <Mutation>
          {() => {
            return (
              <Form>
                <FormInput
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Recipe name"
                  onChange={this.handleChange}
                />
                <FormSelect
                  name="Category"
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
                <button type="submit">
                  create recipe
                </button>
              </Form>
            );
          }}
        </Mutation>
      </MainAppContainer>
    );
  }
}

export default AddRecipe;
