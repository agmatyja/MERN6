import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import {BASE_URL} from '../../../config';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadPost } = this.props;
    loadPost(this.props.id);
  }

  render() {
    const { post, request } = this.props;
	 
    if (!request.pending && request.success && post) 
        return (
	      <article className="single-post">
			<PageTitle>{post.title}</PageTitle>
			<FacebookProvider appId={BASE_URL}>
              <ShareButton href={window.location.href} >
                Share
              </ShareButton>
            </FacebookProvider>
			<HtmlBox>{post.content}</HtmlBox>
			<FacebookProvider appId={BASE_URL}>
              <Comments href={window.location.href} />
			</FacebookProvider>
          </article>
		);
    if (request.pending || request.success === null)
        return <Spinner />;
    if (!request.pending && request.error !== null && request.error !== undefined)
        return <Alert variant="error">{request.error}</Alert>;
    if (!request.pending && request.success && !post) 
        return <Alert variant="info">No post</Alert>;
    return <Spinner />;
  }
}


SinglePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  loadPost: PropTypes.func.isRequired,
  id: PropTypes.string
};

//export default SinglePost;
export default withRouter(props => <SinglePost {...props}/>);