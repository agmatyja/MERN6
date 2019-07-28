import React from 'react';
import { PropTypes } from 'prop-types';

import PostSummary from '../PostSummary/PostSummary';

class PostsList extends React.Component {
	
  render () {
	const { posts } = this.props;
	return <div>
        <section className="posts-list">
          {posts.map(post => <PostSummary key={post.id} {...post} />)}
        </section>
      </div>;
  };

};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  )
};

export default PostsList;