'use client';

import { getComments } from '@/network/services/posts';
import { useQuery } from '@tanstack/react-query';

function Comments() {
  const { data } = useQuery({ queryKey: ['posts-comments'], queryFn: getComments, refetchOnWindowFocus: true });

  return (
    <div>
      <h2>Comments</h2>
      {data?.comments?.map((comment, index) => (
        <div key={index}>{JSON.stringify(comment)}</div>
      ))}
    </div>
  );
}

export default Comments;
