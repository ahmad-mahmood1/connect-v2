import { getPremiumHouseData } from '@/network/services/appConfigs';
import { extractMetadataFromHTML } from '@/utils';

const PremiumHeader = async () => {
  let premiumCssLinks = [];
  let premiumJsLinks = [];
  let premiumData = { header: '', footer: '' };

  async function measureExecutionTime() {
    const startTime = performance.now(); // Get the current timestamp in milliseconds

    // Call the function you want to measure
    premiumData = await getPremiumHouseData();
    if (premiumData) {
      premiumCssLinks = extractMetadataFromHTML(premiumData.css);
      premiumJsLinks = extractMetadataFromHTML(premiumData.js);
    }
    const endTime = performance.now(); // Get the current timestamp after function execution

    const executionTime = endTime - startTime; // Calculate the difference

    // Convert milliseconds to minutes and seconds
    const minutes = Math.floor(executionTime / 60000);
    const seconds = ((executionTime % 60000) / 1000).toFixed(3);

    console.log(`Function execution time: ${minutes} minutes and ${seconds} seconds`);
  }

  // Call the function to measure its execution time
  await measureExecutionTime();

  return (
    <>
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link> */}
      <link
        rel='preload stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css'
        as='style'
      ></link>
      <script defer src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
      <script
        defer
        src='https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js'
        integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
        crossOrigin='anonymous'
      ></script>
      <script
        defer
        src='https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js'
        integrity='sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct'
        crossOrigin='anonymous'
      ></script>
      {premiumJsLinks?.map((link, index) => {
        // return <Script key={index} src={link.attributes.src} strategy='afterInteractive'></Script>;
        return <script key={index} defer src={link.attributes.src} />;
      })}

      {premiumCssLinks?.map((link, index) => {
        return <link key={index} rel='preload stylesheet' href={link.attributes.href} as='style'></link>;
        // return <link key={index} rel="stylesheet" href={link.attributes.href} media={link.attributes.media}></link>
      })}
    </>
  );
};

export default PremiumHeader;
