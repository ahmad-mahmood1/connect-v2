'use client';

import { getPosts } from '@/network/services/posts';
import { useQuery } from '@tanstack/react-query';

export default function Posts() {
  const { data } = useQuery({ queryKey: ['posts'], queryFn: getPosts });
  return (
    <div>
      <h2>Posts</h2>
      {data?.posts?.map((post, index) => (
        <div key={index}>{JSON.stringify(post)}</div>
      ))}
    </div>
  );
}
