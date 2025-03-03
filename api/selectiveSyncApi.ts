/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.4.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { GetAdvancedSyncScheduleFromWarehouse200Response } from '../model/getAdvancedSyncScheduleFromWarehouse200Response';
import { ListSelectiveSyncsFromWarehouseAndSource200Response } from '../model/listSelectiveSyncsFromWarehouseAndSource200Response';
import { ListSyncsFromWarehouse200Response } from '../model/listSyncsFromWarehouse200Response';
import { ListSyncsFromWarehouseAndSource200Response } from '../model/listSyncsFromWarehouseAndSource200Response';
import { PaginationInput } from '../model/paginationInput';
import { ReplaceAdvancedSyncScheduleForWarehouse200Response } from '../model/replaceAdvancedSyncScheduleForWarehouse200Response';
import { ReplaceAdvancedSyncScheduleForWarehouseV1Input } from '../model/replaceAdvancedSyncScheduleForWarehouseV1Input';
import { RequestErrorEnvelope } from '../model/requestErrorEnvelope';
import { UpdateSelectiveSyncForWarehouse200Response } from '../model/updateSelectiveSyncForWarehouse200Response';
import { UpdateSelectiveSyncForWarehouseV1Input } from '../model/updateSelectiveSyncForWarehouseV1Input';

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

export enum SelectiveSyncApiApiKeys {}

export class SelectiveSyncApi {
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

    public setApiKey(key: SelectiveSyncApiApiKeys, value: string) {
        (this.authentications as any)[SelectiveSyncApiApiKeys[key]].apiKey =
            value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.token.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Returns the advanced sync schedule for a Warehouse.   The rate limit for this endpoint is 2 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Get Advanced Sync Schedule from Warehouse
     * @param warehouseId
     */
    public async getAdvancedSyncScheduleFromWarehouse(
        warehouseId: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetAdvancedSyncScheduleFromWarehouse200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/warehouses/{warehouseId}/advanced-sync-schedule'.replace(
                '{' + 'warehouseId' + '}',
                encodeURIComponent(String(warehouseId))
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

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling getAdvancedSyncScheduleFromWarehouse.'
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
                body: GetAdvancedSyncScheduleFromWarehouse200Response;
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
                                    'GetAdvancedSyncScheduleFromWarehouse200Response'
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
     * Returns the schema for a Warehouse, including Sources, Collections, and Properties.   The rate limit for this endpoint is 2 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary List Selective Syncs from Warehouse And Source
     * @param warehouseId
     * @param sourceId
     * @param pagination Defines the pagination parameters.  This parameter exists in v1.
     */
    public async listSelectiveSyncsFromWarehouseAndSource(
        warehouseId: string,
        sourceId: string,
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ListSelectiveSyncsFromWarehouseAndSource200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/warehouses/{warehouseId}/connected-sources/{sourceId}/selective-syncs'
                .replace(
                    '{' + 'warehouseId' + '}',
                    encodeURIComponent(String(warehouseId))
                )
                .replace(
                    '{' + 'sourceId' + '}',
                    encodeURIComponent(String(sourceId))
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

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling listSelectiveSyncsFromWarehouseAndSource.'
            );
        }

        // verify required parameter 'sourceId' is not null or undefined
        if (sourceId === null || sourceId === undefined) {
            throw new Error(
                'Required parameter sourceId was null or undefined when calling listSelectiveSyncsFromWarehouseAndSource.'
            );
        }

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
                body: ListSelectiveSyncsFromWarehouseAndSource200Response;
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
                                    'ListSelectiveSyncsFromWarehouseAndSource200Response'
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
     * Returns the overview of syncs for every Source connected to a Warehouse.   The rate limit for this endpoint is 2 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary List Syncs from Warehouse
     * @param warehouseId
     * @param pagination Defines the pagination parameters.  This parameter exists in v1.
     */
    public async listSyncsFromWarehouse(
        warehouseId: string,
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouse200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/warehouses/{warehouseId}/syncs'.replace(
                '{' + 'warehouseId' + '}',
                encodeURIComponent(String(warehouseId))
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

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling listSyncsFromWarehouse.'
            );
        }

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
                body: ListSyncsFromWarehouse200Response;
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
                                    'ListSyncsFromWarehouse200Response'
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
     * Returns the overview of syncs for a Source connected to a Warehouse.   The rate limit for this endpoint is 2 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary List Syncs from Warehouse And Source
     * @param warehouseId
     * @param sourceId
     * @param pagination Defines the pagination parameters.  This parameter exists in v1.
     */
    public async listSyncsFromWarehouseAndSource(
        warehouseId: string,
        sourceId: string,
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouseAndSource200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/warehouses/{warehouseId}/connected-sources/{sourceId}/syncs'
                .replace(
                    '{' + 'warehouseId' + '}',
                    encodeURIComponent(String(warehouseId))
                )
                .replace(
                    '{' + 'sourceId' + '}',
                    encodeURIComponent(String(sourceId))
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

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling listSyncsFromWarehouseAndSource.'
            );
        }

        // verify required parameter 'sourceId' is not null or undefined
        if (sourceId === null || sourceId === undefined) {
            throw new Error(
                'Required parameter sourceId was null or undefined when calling listSyncsFromWarehouseAndSource.'
            );
        }

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
                body: ListSyncsFromWarehouseAndSource200Response;
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
                                    'ListSyncsFromWarehouseAndSource200Response'
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
     * Updates the advanced sync schedule for a Warehouse, replacing the sync schedule with a new schedule.   The rate limit for this endpoint is 2 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Replace Advanced Sync Schedule for Warehouse
     * @param warehouseId
     * @param ReplaceAdvancedSyncScheduleForWarehouseV1Input
     */
    public async replaceAdvancedSyncScheduleForWarehouse(
        warehouseId: string,
        ReplaceAdvancedSyncScheduleForWarehouseV1Input: ReplaceAdvancedSyncScheduleForWarehouseV1Input,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ReplaceAdvancedSyncScheduleForWarehouse200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/warehouses/{warehouseId}/advanced-sync-schedule'.replace(
                '{' + 'warehouseId' + '}',
                encodeURIComponent(String(warehouseId))
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

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling replaceAdvancedSyncScheduleForWarehouse.'
            );
        }

        // verify required parameter 'ReplaceAdvancedSyncScheduleForWarehouseV1Input' is not null or undefined
        if (
            ReplaceAdvancedSyncScheduleForWarehouseV1Input === null ||
            ReplaceAdvancedSyncScheduleForWarehouseV1Input === undefined
        ) {
            throw new Error(
                'Required parameter ReplaceAdvancedSyncScheduleForWarehouseV1Input was null or undefined when calling replaceAdvancedSyncScheduleForWarehouse.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(
                ReplaceAdvancedSyncScheduleForWarehouseV1Input,
                'ReplaceAdvancedSyncScheduleForWarehouseV1Input'
            ),
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
                body: ReplaceAdvancedSyncScheduleForWarehouse200Response;
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
                                    'ReplaceAdvancedSyncScheduleForWarehouse200Response'
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
     * Configures the schema for a Warehouse, including Sources, Collections, and Properties.    • When called, this endpoint may generate the `Storage Destination Modified` event in the [audit trail](/tag/Audit-Trail).          The rate limit for this endpoint is 2 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Update Selective Sync for Warehouse
     * @param warehouseId
     * @param UpdateSelectiveSyncForWarehouseV1Input
     */
    public async updateSelectiveSyncForWarehouse(
        warehouseId: string,
        UpdateSelectiveSyncForWarehouseV1Input: UpdateSelectiveSyncForWarehouseV1Input,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectiveSyncForWarehouse200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/warehouses/{warehouseId}/selective-sync'.replace(
                '{' + 'warehouseId' + '}',
                encodeURIComponent(String(warehouseId))
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

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling updateSelectiveSyncForWarehouse.'
            );
        }

        // verify required parameter 'UpdateSelectiveSyncForWarehouseV1Input' is not null or undefined
        if (
            UpdateSelectiveSyncForWarehouseV1Input === null ||
            UpdateSelectiveSyncForWarehouseV1Input === undefined
        ) {
            throw new Error(
                'Required parameter UpdateSelectiveSyncForWarehouseV1Input was null or undefined when calling updateSelectiveSyncForWarehouse.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(
                UpdateSelectiveSyncForWarehouseV1Input,
                'UpdateSelectiveSyncForWarehouseV1Input'
            ),
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
                body: UpdateSelectiveSyncForWarehouse200Response;
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
                                    'UpdateSelectiveSyncForWarehouse200Response'
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
