import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  loadPostsPage = (page) => {
    const { loadPostsByPage, postsPerPage } = this.props;
    loadPostsByPage(page, postsPerPage || 10);
  }
  
  componentDidMount() {
	this.loadPostsPage(1);
  }

  render() {
    const { posts, request } = this.props;
	const { initialPage, pages} = this.props;
    const { pagination } = this.props;
	
	if (!request.pending && request.success && posts.length > 0 && pagination === false) 
        return <PostsList posts={posts} />;
    if (!request.pending && request.success && posts.length > 0) 
        return <div>
          <PostsList posts={posts} />
          <Pagination pages={pages} onPageChange={this.loadPostsPage} initialPage={initialPage || 1}/>
        </div>;
    if (request.pending || request.success === null)
        return <Spinner />;
    if (!request.pending && request.error !== null && request.error !== undefined)
        return <Alert variant="error">{request.error}</Alert>;
    if (!request.pending && request.success && posts.length === 0) 
        return <Alert variant="info">No posts</Alert>;
	
    return <Spinner />;
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
	  author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pages: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number,
  pagination: PropTypes.bool
};

export default Posts;