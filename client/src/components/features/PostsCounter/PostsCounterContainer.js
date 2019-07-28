import { connect } from 'react-redux';
import { getPostsCount, loadPostsRequest } from '../../../redux/PostsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  postsCount: getPostsCount(state)
})

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);