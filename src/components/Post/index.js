import React from 'react';

import PostHeader from './PostHeader';

import * as styles from './Post.module.scss';

export default function Post(props) {
  return (
    <article
      className={props.post.removed ? styles.classRemoved : styles.class}
    >
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />

      <h4>{props.post.subtitle}</h4>
      <span>Likes: {props.post.likes}</span>
    </article>
  );
}
