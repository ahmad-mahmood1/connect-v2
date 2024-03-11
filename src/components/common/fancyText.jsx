import { getPosts } from '@/network/services/posts';

const FancyText = async () => {
  const randomData = await getPosts();

  return (
    <>
      <div>
        This data will be fetched from API everytime we visit <b>/test</b> page: {JSON.stringify(randomData || {})}
      </div>
    </>
  );
};

export default FancyText;
