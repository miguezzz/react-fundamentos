import React from 'react';

export default function Post(props) {
  return (
    <>
      <article>
        {props.post.read ? (
          <h3>
            <s>{props.post.title}</s>
          </h3>
        ) : (
          <h3>{props.post.title}</h3>
        )}
        <h4>{props.post.subtitle}</h4>
        <span>Likes: {props.likes}</span>
        <button type="button" onClick={() => props.onRemove(props.post.id)}>
          Remover Post
        </button>
      </article>
      <br />
    </>
  );
}
