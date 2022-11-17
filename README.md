# Public API Typescript Client

The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs. The full documentation is available at https://docs.segmentapis.com.

All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.

See the next sections for more information on how to use the Segment Public API SDK.

## Overview

This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project. By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

-   API version: 32.0.8

-   Build package: org.openapitools.codegen.languages.TypeScriptNodeClientCodegen

#### Building

To build and compile the typescript sources to javascript use:

```
yarn install
yarn build
```

## Code Example

```typescript
import * as publicApi from '@segment/public-api-sdk-typescript';

const YOUR_TOKEN = 'YOUR_TOKEN';

const myApis = publicApi.configureApis(YOUR_TOKEN);
publicApi
    .unwrap(myApis.workspaces.getWorkspaceCurrent())
    .then((result) => {
        console.log(`Result:\n ${JSON.stringify(result)}`);
    })
    .catch((error) => {
        console.log('ERROR\n:', error);
    });
```

#### Testing

All test files are under `tests` folders.

```
yarn install
yarn test
```

## Contributing

This repository is auto-generated and not open for contributions from external contributors. If you have problems with the repo, please raise an issue instead of a pull request. Pull requests will not be reviewed.
