import { wrapAndDeferScripts } from '@/lib/utils';
import { getPremiumHouseData } from '@/services/app';

const PremiumFooter = async () => {
  let premiumData = { footer: '' };
  let premiumFooter = '';

  premiumData = await getPremiumHouseData();
  //   premiumFooter = addDefer(premiumData.footer);
  premiumFooter = premiumData?.footer && wrapAndDeferScripts(premiumData?.footer);

  return <>{premiumFooter && <div dangerouslySetInnerHTML={{ __html: premiumFooter }}></div>}</>;
};

export default PremiumFooter;
