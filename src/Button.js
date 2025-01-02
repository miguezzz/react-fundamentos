import React from 'react';

export default function Button(props) {
  return (
    <button type="button" onClick={() => props.onRemove(props.post.id)}>
      {props.children}
    </button>
  );
}
