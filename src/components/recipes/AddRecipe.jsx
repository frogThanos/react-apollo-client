import React, { PureComponent } from 'react';
import {
  MainAppContainer,
  FromTitle,
  Form,
  FormInput,
  FormSelect,
  FromTextArea,
} from '../../styled';

class AddRecipe extends PureComponent {
  handleChange = () => {

  };

  render() {
    return (
      <MainAppContainer>
        <FromTitle>AddRecipe</FromTitle>
        <Form>
          <FormInput
            type="text"
            name="name"
            placeholder="Recipe name"
            onChange={this.handleChange}
          />
          <FormSelect name="Category">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </FormSelect>
          <FormInput
            type="text"
            name="description"
            placeholder="description"
            onChange={this.handleChange}
          />
          <FromTextArea
            name="instructions"
            placeholder="instructions"
            onChange={this.handleChange}
          />
          <button type="submit">
            create recipe
          </button>
        </Form>
      </MainAppContainer>
    );
  }
}

export default AddRecipe;
