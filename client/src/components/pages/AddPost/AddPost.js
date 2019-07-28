import React from 'react';
import PostForm from '../../features/PostForm/PostFormContainer';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

const AddPost = () => (
  <div>
    <h1>Add Post</h1>
	<PostForm />
  </div>
);


export default AddPost;