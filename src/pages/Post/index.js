import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  console.log(params);

  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(queryParams.get('color'));

  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}
