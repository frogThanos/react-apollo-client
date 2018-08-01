import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import withSession from '../auth/withSession';
import { LIKE_RECIPE, GET_RECIPE, UNLIKE_RECIPE } from '../../queries';

class LikeRecipe extends PureComponent {
  state = {
    username: '',
    liked: false,
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { username, favorites } = this.props.session.getCurrentUser;
      const { _id } = this.props;
      const prevLiked = favorites.findIndex(favorite => favorite._id === _id) > -1;
      this.setState({ liked: prevLiked, username });
    }
  }

  handleClick = (likeRecipe, unLikeRecipe) => {
    this.setState(prevState => ({
      liked: !prevState.liked,
    }), () => this.handleLike(likeRecipe, unLikeRecipe));
  };

  handleLike = (likeRecipe, unLikeRecipe) => {
    if (this.state.liked) {
      likeRecipe().then(async () => {
        await this.props.refetch();
      });
    } else {
      unLikeRecipe().then(async () => {
        await this.props.refetch();
      });
    }
  };

  updateLike = (cache, { data: { likeRecipe } }) => {
    const { _id } = this.props;
    const { getRecipe } = cache.readQuery({ query: GET_RECIPE, variables: { _id } });

    cache.writeQuery({
      query: GET_RECIPE,
      variables: { _id },
      data: {
        getRecipe: { ...getRecipe, likes: likeRecipe.likes + 1 },
      },
    });
  };

  updateUnlike = (cache, { data: { unLikeRecipe } }) => {
    const { _id } = this.props;
    const { getRecipe } = cache.readQuery({ query: GET_RECIPE, variables: { _id } });

    cache.writeQuery({
      query: GET_RECIPE,
      variables: { _id },
      data: {
        getRecipe: { ...getRecipe, likes: unLikeRecipe.likes - 1 },
      },
    });
  };

  render() {
    const { username, liked } = this.state;
    const { _id } = this.props;
    return (
      <Mutation mutation={UNLIKE_RECIPE} variables={{ _id, username }} update={this.updateUnlike}>
        {(unLikeRecipe) => (
          <Mutation mutation={LIKE_RECIPE} variables={{ _id, username }} update={this.updateLike}>
            {(likeRecipe) => {
              return username && (
                <button
                  type="button"
                  onClick={() => this.handleClick(likeRecipe, unLikeRecipe)}
                >
                  {liked ? 'Unlike' : 'Like'}
                </button>
              );
            }}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export default withSession(LikeRecipe);
