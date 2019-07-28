import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostsByPageRequest, getPages, getPresentPage } from '../../../redux/PostsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);