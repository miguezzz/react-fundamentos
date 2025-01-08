import React from 'react';

import PostHeader from './PostHeader';

import * as styles from './Post.module.scss';

import { Subtitle, Likes } from './styles';

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

      <Subtitle>{props.post.subtitle}</Subtitle>
      <Likes>Likes: {props.post.likes}</Likes>
    </article>
  );
}
