
```
src
 
 ┣ app # all page and layout files
 
 ┃ ┣ catalog 
 ┃ ┃ ┣ layout.jsx 
 ┃ ┃ ┗ page.jsx
 ┃ ┣ layout.jsx 
 ┃ ┗ page.jsx
 
 ┣ components # components comprising of common, feature level and layout based components
 ┃ ┣ common
 ┃ ┣ catalog
 ┃ ┣ layout
 ┃ ┃ ┣ footer.jsx
 ┃ ┃ ┣ header.jsx
 ┃ ┃ ┗ headerBody.jsx
 
 ┣ network # folder containing all feature services and network request configuration (headers, cookies etc). 
 ┃ ┣ services
 ┃ ┃ ┣ catalog
 ┃ ┃ ┗ index.js
 ┃ ┗ fetch.js # fetch wrapper configuration file

 ┣ providers # context providers to be used throughout the application 
 ┃ ┗ configStoreProvider.js
 
 ┣ stores # zustand store setups for different modules
 ┃ ┗ configStore.js
 
 ┣ styles # all styling related files
 ┃ ┣ _variables.scss
 ┃ ┗ globals.scss
 
 ┗ utils # util files containing helper functions
   ┗ index.js






 src
 
 ┣ app # all page and layout files with route level network layer and components 
 ┃ ┣ [featureName]
 ┃ ┃ ┣ api
 ┃ ┃ ┣ components
 ┃ ┃ ┣ layout.jsx
 ┃ ┃ ┗ page.jsx

 ┣ components # components utilized throughout the application
 ┃ ┣ wrapper.jsx
 ┃ ┣ algoliaWidget.jsx
 ┃ ┣ card.jsx
 ┃ ┗ dropdown.jsx
 
 ┣ network # folder containing all feature services and network request configuration (headers, cookies etc). 
 ┃ ┣ services
 ┃ ┃ ┣ catalog
 ┃ ┃ ┗ index.js
 ┃ ┗ fetch.js # fetch wrapper configuration file

 ┣ providers # context providers to be used throughout the application 
 ┃ ┗ configStoreProvider.js
 
 ┣ stores # zustand store setups for different modules
 ┃ ┗ configStore.js
 
 ┣ styles # all styling realted files
 ┃ ┣ _variables.scss
 ┃ ┗ globals.scss
 
 ┗ utils # util files containing helper functions
   ┗ index.js
```