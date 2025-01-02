import React from 'react';

import PostHeader from './PostHeader';

export default function Post(props) {
  return (
    <>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <article>
        <h4>{props.post.subtitle}</h4>
        <span>Likes: {props.post.likes}</span>
      </article>
      <br />
    </>
  );
}
