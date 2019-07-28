import { connect } from 'react-redux';
import { getPost, getRequest, loadPostRequest } from '../../../redux/PostsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  post: getPost(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadPost: (id) => dispatch(loadPostRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);