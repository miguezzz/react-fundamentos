import React from 'react';

export default function Post(props) {
  return (
    <>
      <article>
        <h2>{props.post.title}</h2>
        <h3>{props.post.subtitle}</h3>
        <span>{props.likes}</span>
      </article>
      <br />
    </>
  );
}
