import React from 'react';

import Button from './Button';

export default function PostHeader(props) {
  return (
    <>
      {props.post.read ? (
        <strong>
          <s>{props.post.title}</s>
        </strong>
      ) : (
        <strong>{props.post.title}</strong>
      )}
      <Button
        onClick={() => props.onRemove(props.post.id)}
        post={{
          id: props.post.id,
        }}
      >
        Remover Post
      </Button>
    </>
  );
}
