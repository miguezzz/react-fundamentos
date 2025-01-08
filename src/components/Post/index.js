import React from 'react';

import PostHeader from './PostHeader';

import { Container, Subtitle, Likes } from './styles';

export default function Post(props) {
  return (
    <Container removed={props.post.removed}>
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
    </Container>
  );
}
