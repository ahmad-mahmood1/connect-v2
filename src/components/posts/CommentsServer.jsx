// app/posts/comments-server.jsx
import { getComments } from '@/network/services/posts';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Comments from './Comments';

export default async function CommentsServerComponent() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts-comments'],
    queryFn: getComments,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Comments />
    </HydrationBoundary>
  );
}
