import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequest } from '../../../redux/PostsRedux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);