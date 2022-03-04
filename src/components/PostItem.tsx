import React from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../hooks';

const PostItem = () => {
  const { id } = useParams();

  const { post } = usePost(id);
  return <div>{post?.title}</div>;
};

export default PostItem;
