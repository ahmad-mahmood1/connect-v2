// app/posts/page.jsx
import CommentsServerComponent from '@/components/posts/CommentsServer';
import Posts from '@/components/posts/Posts';
import { getPosts } from '@/network/services/posts';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Link from 'next/link';

export default async function PostsPage() {
  const queryClient = new QueryClient();
  console.log('===  queryClient:', queryClient);

  const initialData = await getPosts();
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: initialData,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
      <CommentsServerComponent />
      <Link href='/1'>Go to Catalog</Link>
    </HydrationBoundary>
  );
}