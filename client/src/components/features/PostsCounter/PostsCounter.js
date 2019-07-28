import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
	const { postsCount } = this.props;  
    return (
      <div>Posts amount: {postsCount === 0 ? "no posts" : postsCount}</div>
    );
  }

};

PostsCounter.propTypes = {
  postsCount: PropTypes.number.isRequired,
  loadPosts: PropTypes.func.isRequired,
};
export default PostsCounter;