import React, { PureComponent } from 'react';
import withSession from '../auth/withSession';

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

  render() {
    const { username } = this.state;
    return username && <button type="button">like</button>;
  }
}

export default withSession(LikeRecipe);
