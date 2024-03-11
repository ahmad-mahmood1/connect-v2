
```
.
├── pipeline-scripts # contains bash script to deploy the given partner
│    └── envs # environment variables for different supported environments
│        ├── arbisoft-develop
│        ├── arbisoft-stage
│        ├── production
│        └── stage
│    ...
├── src
│    ├── calculations # a few helpers/utilities to make some calculations
│    ├── components # contains all the components
|    │    └── v2 # contains all the v2 components
│    ├── configs # contains configurations for different partners, and environment variables
│    │    └── partners
│    ├── i18n # the whole implementation of translations logic
│    │    └── utils
│    ├── pages # contains the pages of the whole bidder console
│    │    ├── catalog # v1 catalog page
|    │    └── v2 # v2 catalog page
│    ├── redux # everything that is related to redux, middlewared, slicers (reducers, thunks, selectors)
│    │    ├── middlewares
│    │    │    └── socket
│    │    │        └── utils
│    │    ├── slices
│    │    │    ...
│    ├── services # the whole network layer of the application, all GQL endpoints are integrated here
│    │    ...
│    │    ├── clients
│    │    │    └── gql # base GQL client, that is being used by all other services
│    │    ...
│    ├── styles # base styles and variables, NOTE: components are styled in their relevant directories
│    │    ├── themes # themes for different v1 partners
│    │    │   ├── auctionzip
│    │    │   ├── invaluable
│    │    │   └── privateLabel
│    │    └── v2 # themes for different v2 partners
│    │        ├── themes # themes for different partners
│    │        ├── auctionzip
│    │        ├── invaluable
│    │        └── privateLabel
│    └── testing # unit tests for the whole app
│         ├── components
│         └── pages
├── terraform # infrastructure for all environments is written as code in this directory
│    ├── arbisoft-develop
│    ├── arbisoft-stage
│    ├── module
│    ├── production
│    └── stage
├──
.
```