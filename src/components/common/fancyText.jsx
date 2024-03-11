import { getRandomData } from '@/network/services';

const FancyText = async () => {
  const randomData = await getRandomData();

  return (
    <>
      <div>
        This data will be fetched from API everytime we visit <b>/test</b> page: {JSON.stringify(randomData || {})}
      </div>
    </>
  );
};

export default FancyText;
