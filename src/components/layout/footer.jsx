import { getPremiumHouseData } from '@/network/services/appConfigs';
import { wrapAndDeferScripts } from '@/utils';

const PremiumFooter = async () => {
  let premiumData = { footer: '' };
  let premiumFooter = '';

  premiumData = await getPremiumHouseData();
  //   premiumFooter = addDefer(premiumData.footer);
  premiumFooter = premiumData?.footer && wrapAndDeferScripts(premiumData?.footer);

  return <>{premiumFooter && <div dangerouslySetInnerHTML={{ __html: premiumFooter }}></div>}</>;
};

export default PremiumFooter;
