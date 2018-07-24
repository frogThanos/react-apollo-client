import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import withSession from '../auth/withSession';
import { LIKE_RECIPE } from '../../queries';

class LikeRecipe extends PureComponent {
  state = {
    username: '',
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { username } = this.props.session.getCurrentUser;
      this.setState({ username });
    }
  }

  handleLike = (likeRecipe) => {
    likeRecipe().then(({ data }) => {
      console.log(data);
    });
  };

  render() {
    const { username } = this.state;
    const { _id } = this.props;
    return (
      <Mutation mutation={LIKE_RECIPE} variables={{ _id, username }}>
        {(likeRecipe) => {
          return username && (
            <button
              type="button"
              onClick={() => this.handleLike(likeRecipe)}
            >
              like
            </button>
          );
        }}
      </Mutation>
    );
  }
}

export default withSession(LikeRecipe);
