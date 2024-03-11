import { getPremiumHouseData } from '@/network/services';

const PremiumHeaderBody = async () => {
  const premiumData = await getPremiumHouseData();

  return <>{premiumData?.header && <div dangerouslySetInnerHTML={{ __html: premiumData?.header }}></div>}</>;
};

export default PremiumHeaderBody;