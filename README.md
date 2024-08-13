# Segment Public API TypeScript SDK

:warning: This SDK is currently released as [Public Beta](https://segment.com/legal/first-access-beta-preview/). Its use in critical systems is discouraged, but [feedback is welcome](#contributing).

## Overview

The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs. The full documentation is available at [https://docs.segmentapis.com](https://docs.segmentapis.com).

All endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.

See the next sections for more information on how to use the Segment Public API TypeScript SDK.

Latest API and SDK version: 53.0.0

## Installation

This SDK is published as an [NPM package](https://npmjs.org). To install it, use:

```
npm i @segment/public-api-sdk-typescript
```

Or, if you're using yarn:

```
yarn add @segment/public-api-sdk-typescript
```

To build and compile the SDK from source, clone this repository and use:

```
yarn install
yarn build
```

This will output the compiled JavaScript files in the `dist/` directory.

You are now ready to start making calls to Public API!

## Example

```typescript
import * as PublicAPI from '@segment/public-api-sdk-typescript';

const TOKEN = '...'; // fetch your token from a secure location

const { workspaces } = PublicAPI.configureApis(TOKEN);
// To access the EU endpoint, use `const { workspaces } = PublicAPI.configureEuApis(TOKEN)`

PublicAPI.unwrap(workspaces.getWorkspace())
    .then((result) => {
        console.log(JSON.stringify(result));
    })
    .catch(console.error);
```

## Contributing

The contents of this repository are automatically generated, so we can't take contributions from external developers. If you have any issues with this SDK, please raise an issue or reach out to friends@segment.com instead of opening a pull request. Pull requests will not be reviewed.
