import React from 'react';

import SinglePost from '../../features/SinglePost/SinglePostContainer';

const SinglePostPage = (params) => (
  <div>
    <SinglePost id={params.match.params.id}/>
  </div>
);

export default SinglePostPage;