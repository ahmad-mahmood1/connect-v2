// app/posts/page.jsx
import CommentsServerComponent from '@/components/posts/CommentsServer';
import Posts from '@/components/posts/Posts';
import { getPosts } from '@/network/services/posts';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Link from 'next/link';

export default async function PostsPage() {
  const queryClient = new QueryClient();
  console.log('===  queryClient:', queryClient);

  // fetch for markup building inn the same SC
  const initialData = await getPosts();

  // react query prefetch utilizing fetch memoization. pass data to nested client comps
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: initialData,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>iniit ddta : {JSON.stringify(initialData)}</div>
      <Posts />
      <CommentsServerComponent />
      <Link href='/1'>Go to Catalog</Link>
    </HydrationBoundary>
  );
}
