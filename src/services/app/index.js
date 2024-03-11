import { cookies, headers } from 'next/headers';
import { customFetch } from '../client/fetch';

export const fetchSessionInfo = async () => {
  const allCookies = cookies().toString();

  try {
    const sessionInfo = await customFetch({
      url: 'https://connect-stage.invaluable.com/syn_web/session-info',
      headers: { Cookie: allCookies },
      options: {
        cache: 'no-store',
      },
    });
    const sessionData = await sessionInfo.json();
    return sessionData;
  } catch (error) {
    console.error('error in session info call ====>> ', error);
  }
};

export const getCustomHouseSettings = async () => {
  try {
    const houseUserName = headers().get('houseusername') || 'lawsons';

    const houseSettings = await customFetch({
      url: `https://connect-stage.invaluable.com/api/auction-houses/username/${houseUserName}`,
      options: { next: { revalidate: 3600 } },
    });

    return houseSettings;
  } catch (error) {
    console.error('error in house Settings call ====>> ', error);
  }
};

export const getPremiumHouseData = async () => {
  try {
    let houseUserName = headers().get('houseusername') || 'lawsons';

    const validUserNames = new Set(['figliodesigns', 'aste', 'stout']);
    if (validUserNames.has(houseUserName)) {
      houseUserName = 'lawsons';
    }

    let isLoggedIn = false;
    // const sessionInfo = await fetchSessionInfo();
    // if (sessionInfo?.user?.userID) {
    //   isLoggedIn = true;
    // }
    const premiumDataRes = await customFetch({
      url: `https://${houseUserName}.pl.stage.invaluable.com/wp-json/invaluable/v1/data`,
      query: {
        loggedin: isLoggedIn,
      },
      options: { next: { revalidate: 3600 } },
    });

    return premiumDataRes;
  } catch (error) {
    console.error('error in getPremiumHouseData call ====>> ', error);
  }
};
