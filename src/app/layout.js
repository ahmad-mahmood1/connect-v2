import PremiumFooter from '@/components/layout/footer';
import PremiumHeader from '@/components/layout/header';
import PremiumHeaderBody from '@/components/layout/headerBody';
import { getCustomHouseSettings } from '@/network/services';
import { ConfigStoreProvider } from '@/providers/configStoreProvider';
import '@/styles/globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';

export const metadata = {
  title: 'Connect Next App POC',
  description: 'Connect app with premium Header, Footer and Algolia integration',
};

export default async function RootLayout({ children }) {
  const houseSettings = await getCustomHouseSettings();

  return (
    <html lang='en'>
      <head>
        <PremiumHeader />
        <link crossOrigin='anonymous' href='https://0HJBNDV358.algolia.net' rel='preconnect' />
      </head>

      <body className='h-body'>
        <ConfigStoreProvider serverState={houseSettings}>
          {/* <Suspense fallback={<Skeleton count={3} />}> */}
          <PremiumHeaderBody />
          {/* </Suspense> */}
          <section id='ib-main-content' className='container-fluid' role='main'>
            {/* <Nav /> */}
            {children}
          </section>
          {/* <Suspense fallback={<Skeleton count={5} />}> */}
          <PremiumFooter />
          {/* </Suspense> */}
        </ConfigStoreProvider>
      </body>
    </html>
  );
}
