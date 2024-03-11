// export function extractMetadataFromHTML(htmlString) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, 'text/html');

//   const linkTags = Array.from(doc.querySelectorAll('link'));
//   const scriptTags = Array.from(doc.querySelectorAll('script'));

//   const metadata = [];

//   linkTags.forEach((linkTag) => {
//     const attributes = {};
//     Array.from(linkTag.attributes).forEach((attr) => {
//       attributes[attr.name] = attr.value;
//     });
//     metadata.push({
//       tag: 'link',
//       attributes,
//     });
//   });

//   scriptTags.forEach((scriptTag) => {
//     const attributes = {};
//     Array.from(scriptTag.attributes).forEach((attr) => {
//       attributes[attr.name] = attr.value;
//     });
//     metadata.push({
//       tag: 'script',
//       attributes,
//     });
//   });

//   return metadata;
// }

export function extractMetadataFromHTML(htmlString) {
    const linkRegex = /<link\s+([^>]+)>/g;
    const scriptRegex = /<script\s+([^>]+)>/g;
  
    const extractAttributes = tagString => {
      const attributes = {};
      tagString.replace(/(\w+)="([^"]+)"/g, (_, attribute, value) => {
        attributes[attribute] = value;
      });
      return attributes;
    };
  
    const linkMatches = htmlString.match(linkRegex) || [];
    const scriptMatches = htmlString.match(scriptRegex) || [];
  
    const metadata = [];
  
    linkMatches.forEach(linkMatch => {
      const attributes = extractAttributes(linkMatch);
      metadata.push({
        tag: 'link',
        attributes,
      });
    });
  
    scriptMatches.forEach(scriptMatch => {
      const attributes = extractAttributes(scriptMatch);
      metadata.push({
        tag: 'script',
        attributes,
      });
    });
  
    return metadata;
  }
  
  export function addDefer(htmlString) {
    const updatedHTML = htmlString.replace(/<script\b(.*?)>/g, (match, attributes) => {
      // Check if defer attributes are already present
      if (!attributes.includes('async')) {
        // Add defer attributes to the script tag
        return `<script ${attributes.trim()} async>`;
      }
      return match; // Return the original script tag if defer already present
    });
  
    return updatedHTML;
  }
  
  export function wrapAndDeferScripts(htmlString) {
    const jQueryLoaded = `function jQueryLoaded(callback) {
      if (window.jQuery) {
        callback();
      } else {
        setTimeout(function() {
          jQueryLoaded(callback);
        }, 50);
      }
    }`;
  
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  
    return htmlString.replace(regex, match => {
      if (match.includes('src') && !match.includes('defer')) {
        return match.replace(/<script(.*?)>/, '<script$1 defer>');
      } else if (!match.includes('src') && match.includes('function')) {
        const scriptContent = match.replace(/<script.*?>|<\/script>/gi, '');
        const wrappedFunction = `
          <script>
            ${jQueryLoaded}
            jQueryLoaded(function() {
              function init() {
                ${scriptContent}
              }
              init();
            });
          </script>
        `;
        return wrappedFunction;
      }
      return match;
    });
  }
  