/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.13.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { GetDestinationMetadata200Response } from '../model/getDestinationMetadata200Response';
import { GetDestinationsCatalog200Response } from '../model/getDestinationsCatalog200Response';
import { GetSourceMetadata200Response } from '../model/getSourceMetadata200Response';
import { GetSourcesCatalog200Response } from '../model/getSourcesCatalog200Response';
import { GetWarehouseMetadata200Response } from '../model/getWarehouseMetadata200Response';
import { GetWarehousesCatalog200Response } from '../model/getWarehousesCatalog200Response';
import { PaginationInput } from '../model/paginationInput';
import { RequestErrorEnvelope } from '../model/requestErrorEnvelope';

import {
    ObjectSerializer,
    Authentication,
    VoidAuth,
    Interceptor,
} from '../model/models';
import {
    HttpBasicAuth,
    HttpBearerAuth,
    ApiKeyAuth,
    OAuth,
} from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.segmentapis.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CatalogApiApiKeys {}

export class CatalogApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders: any = {};
    protected _useQuerystring: boolean = false;

    protected authentications = {
        default: <Authentication>new VoidAuth(),
        token: new HttpBearerAuth(),
    };

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(
        basePathOrUsername: string,
        password?: string,
        basePath?: string
    ) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CatalogApiApiKeys, value: string) {
        (this.authentications as any)[CatalogApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.token.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns a Destination catalog item by its id.
     * @summary Get Destination Metadata
     * @param destinationMetadataId
     */
    public async getDestinationMetadata(
        destinationMetadataId: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationMetadata200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/catalog/destinations/{destinationMetadataId}'.replace(
                '{' + 'destinationMetadataId' + '}',
                encodeURIComponent(String(destinationMetadataId))
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1+json',
            'application/json',
            'application/vnd.segment.v1beta+json',
            'application/vnd.segment.v1alpha+json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'destinationMetadataId' is not null or undefined
        if (
            destinationMetadataId === null ||
            destinationMetadataId === undefined
        ) {
            throw new Error(
                'Required parameter destinationMetadataId was null or undefined when calling getDestinationMetadata.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: GetDestinationMetadata200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'GetDestinationMetadata200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Returns a list of all available Destinations in the Segment catalog.
     * @summary Get Destinations Catalog
     * @param pagination Required pagination parameters used to filter the Destinations catalog.  This parameter exists in v1.
     */
    public async getDestinationsCatalog(
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationsCatalog200Response;
    }> {
        const localVarPath = this.basePath + '/catalog/destinations';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1+json',
            'application/json',
            'application/vnd.segment.v1beta+json',
            'application/vnd.segment.v1alpha+json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (pagination !== undefined) {
            localVarQueryParameters['pagination'] = ObjectSerializer.serialize(
                pagination,
                'PaginationInput'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: GetDestinationsCatalog200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'GetDestinationsCatalog200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Returns a Source catalog item by its id.
     * @summary Get Source Metadata
     * @param sourceMetadataId
     */
    public async getSourceMetadata(
        sourceMetadataId: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetSourceMetadata200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/catalog/sources/{sourceMetadataId}'.replace(
                '{' + 'sourceMetadataId' + '}',
                encodeURIComponent(String(sourceMetadataId))
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1+json',
            'application/json',
            'application/vnd.segment.v1beta+json',
            'application/vnd.segment.v1alpha+json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'sourceMetadataId' is not null or undefined
        if (sourceMetadataId === null || sourceMetadataId === undefined) {
            throw new Error(
                'Required parameter sourceMetadataId was null or undefined when calling getSourceMetadata.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: GetSourceMetadata200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'GetSourceMetadata200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Returns a list of all available Sources in the Segment catalog.
     * @summary Get Sources Catalog
     * @param pagination Defines the pagination parameters.  This parameter exists in v1.
     */
    public async getSourcesCatalog(
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetSourcesCatalog200Response;
    }> {
        const localVarPath = this.basePath + '/catalog/sources';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1+json',
            'application/json',
            'application/vnd.segment.v1beta+json',
            'application/vnd.segment.v1alpha+json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (pagination !== undefined) {
            localVarQueryParameters['pagination'] = ObjectSerializer.serialize(
                pagination,
                'PaginationInput'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: GetSourcesCatalog200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'GetSourcesCatalog200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Returns a Warehouse catalog item by its id.
     * @summary Get Warehouse Metadata
     * @param warehouseMetadataId
     */
    public async getWarehouseMetadata(
        warehouseMetadataId: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouseMetadata200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/catalog/warehouses/{warehouseMetadataId}'.replace(
                '{' + 'warehouseMetadataId' + '}',
                encodeURIComponent(String(warehouseMetadataId))
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1+json',
            'application/json',
            'application/vnd.segment.v1beta+json',
            'application/vnd.segment.v1alpha+json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'warehouseMetadataId' is not null or undefined
        if (warehouseMetadataId === null || warehouseMetadataId === undefined) {
            throw new Error(
                'Required parameter warehouseMetadataId was null or undefined when calling getWarehouseMetadata.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: GetWarehouseMetadata200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'GetWarehouseMetadata200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
    /**
     * Returns a list of all available Warehouses in the Segment catalog.
     * @summary Get Warehouses Catalog
     * @param pagination Optional pagination params used to filter the Warehouses catalog.  This parameter exists in v1.
     */
    public async getWarehousesCatalog(
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetWarehousesCatalog200Response;
    }> {
        const localVarPath = this.basePath + '/catalog/warehouses';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1+json',
            'application/json',
            'application/vnd.segment.v1beta+json',
            'application/vnd.segment.v1alpha+json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (pagination !== undefined) {
            localVarQueryParameters['pagination'] = ObjectSerializer.serialize(
                pagination,
                'PaginationInput'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.token.accessToken) {
            authenticationPromise = authenticationPromise.then(() =>
                this.authentications.token.applyToRequest(
                    localVarRequestOptions
                )
            );
        }
        authenticationPromise = authenticationPromise.then(() =>
            this.authentications.default.applyToRequest(localVarRequestOptions)
        );

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() =>
                interceptor(localVarRequestOptions)
            );
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: GetWarehousesCatalog200Response;
            }>((resolve, reject) => {
                localVarRequest(
                    localVarRequestOptions,
                    (error, response, body) => {
                        if (error) {
                            reject(error);
                        } else {
                            if (
                                response.statusCode &&
                                response.statusCode >= 200 &&
                                response.statusCode <= 299
                            ) {
                                body = ObjectSerializer.deserialize(
                                    body,
                                    'GetWarehousesCatalog200Response'
                                );
                                resolve({ response: response, body: body });
                            } else {
                                reject(
                                    new HttpError(
                                        response,
                                        body,
                                        response.statusCode
                                    )
                                );
                            }
                        }
                    }
                );
            });
        });
    }
}
