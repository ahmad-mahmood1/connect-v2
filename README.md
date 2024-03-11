
```
 Minimal app folder. Divide the rest of the folders on a feature level.
 
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

 ┣ services # folder containing all feature services and network request configuration (headers, cookies etc). 
 ┃ ┣ app
 ┃ ┃ ┗ index.js
 ┃ ┣ catalog
 ┃ ┃ ┗ index.js
 ┃ ┗ client
 ┃      ┗ fetch.j

 ┣ providers #context providers to be used throughout the app
 ┃ ┣ appConfig
 ┃ ┃ ┗ provider.js
 ┃ ┗ catalog
 ┃ ┃ ┗ provider.js

 ┣ stores # zustand store setups for different modules
 ┃ ┣ catalogStore.js 
 ┃ ┗ configStore.js

 ┣ styles # all styling related files
 ┃ ┣ _variables.scss
 ┃ ┗ globals.scss

 ┗ lib # lib containing common helper functions and constants
   ┗ utils
   ┗ constants
```