/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 56.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CreateProfilesWarehouse201Response } from '../model/createProfilesWarehouse201Response';
import { CreateProfilesWarehouseAlphaInput } from '../model/createProfilesWarehouseAlphaInput';
import { ListProfilesWarehouseInSpace200Response } from '../model/listProfilesWarehouseInSpace200Response';
import { ListSelectiveSyncsFromWarehouseAndSpace200Response } from '../model/listSelectiveSyncsFromWarehouseAndSpace200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveProfilesWarehouseFromSpace200Response } from '../model/removeProfilesWarehouseFromSpace200Response';
import { RequestErrorEnvelope } from '../model/requestErrorEnvelope';
import { UpdateProfilesWarehouseForSpaceWarehouse200Response } from '../model/updateProfilesWarehouseForSpaceWarehouse200Response';
import { UpdateProfilesWarehouseForSpaceWarehouseAlphaInput } from '../model/updateProfilesWarehouseForSpaceWarehouseAlphaInput';
import { UpdateSelectiveSyncForWarehouseAndSpace200Response } from '../model/updateSelectiveSyncForWarehouseAndSpace200Response';
import { UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput } from '../model/updateSelectiveSyncForWarehouseAndSpaceAlphaInput';

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

export enum ProfilesSyncApiApiKeys {}

export class ProfilesSyncApi {
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

    public setApiKey(key: ProfilesSyncApiApiKeys, value: string) {
        (this.authentications as any)[ProfilesSyncApiApiKeys[key]].apiKey =
            value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.token.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Creates a new Profiles Warehouse.    • When called, this endpoint may generate the `Profiles Sync Warehouse Created` event in the [audit trail](/tag/Audit-Trail).
     * @summary Create Profiles Warehouse
     * @param spaceId
     * @param CreateProfilesWarehouseAlphaInput
     */
    public async createProfilesWarehouse(
        spaceId: string,
        CreateProfilesWarehouseAlphaInput: CreateProfilesWarehouseAlphaInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: CreateProfilesWarehouse201Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/profiles-warehouses'.replace(
                '{' + 'spaceId' + '}',
                encodeURIComponent(String(spaceId))
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling createProfilesWarehouse.'
            );
        }

        // verify required parameter 'CreateProfilesWarehouseAlphaInput' is not null or undefined
        if (
            CreateProfilesWarehouseAlphaInput === null ||
            CreateProfilesWarehouseAlphaInput === undefined
        ) {
            throw new Error(
                'Required parameter CreateProfilesWarehouseAlphaInput was null or undefined when calling createProfilesWarehouse.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(
                CreateProfilesWarehouseAlphaInput,
                'CreateProfilesWarehouseAlphaInput'
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
                body: CreateProfilesWarehouse201Response;
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
                                    'CreateProfilesWarehouse201Response'
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
     * Lists all Profile Warehouses for a given space id.    • When called, this endpoint may generate the `Profiles Sync Warehouse Retrieved` event in the [audit trail](/tag/Audit-Trail).
     * @summary List Profiles Warehouse in Space
     * @param spaceId
     * @param pagination Defines the pagination parameters.  This parameter exists in alpha.
     */
    public async listProfilesWarehouseInSpace(
        spaceId: string,
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ListProfilesWarehouseInSpace200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/profiles-warehouses'.replace(
                '{' + 'spaceId' + '}',
                encodeURIComponent(String(spaceId))
            );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling listProfilesWarehouseInSpace.'
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
                body: ListProfilesWarehouseInSpace200Response;
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
                                    'ListProfilesWarehouseInSpace200Response'
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
     * Returns the schema for a Space Warehouse connection, including Collections and Properties.
     * @summary List Selective Syncs from Warehouse And Space
     * @param spaceId
     * @param warehouseId
     * @param pagination Defines the pagination parameters.  This parameter exists in alpha.
     */
    public async listSelectiveSyncsFromWarehouseAndSpace(
        spaceId: string,
        warehouseId: string,
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ListSelectiveSyncsFromWarehouseAndSpace200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/profiles-warehouses/{warehouseId}/selective-syncs'
                .replace(
                    '{' + 'spaceId' + '}',
                    encodeURIComponent(String(spaceId))
                )
                .replace(
                    '{' + 'warehouseId' + '}',
                    encodeURIComponent(String(warehouseId))
                );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling listSelectiveSyncsFromWarehouseAndSpace.'
            );
        }

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling listSelectiveSyncsFromWarehouseAndSpace.'
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
                body: ListSelectiveSyncsFromWarehouseAndSpace200Response;
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
                                    'ListSelectiveSyncsFromWarehouseAndSpace200Response'
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
     * Deletes an existing Profiles Warehouse.    • When called, this endpoint may generate the `Profiles Sync Warehouse Deleted` event in the [audit trail](/tag/Audit-Trail).
     * @summary Remove Profiles Warehouse from Space
     * @param spaceId
     * @param warehouseId
     */
    public async removeProfilesWarehouseFromSpace(
        spaceId: string,
        warehouseId: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: RemoveProfilesWarehouseFromSpace200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/profiles-warehouses/{warehouseId}'
                .replace(
                    '{' + 'spaceId' + '}',
                    encodeURIComponent(String(spaceId))
                )
                .replace(
                    '{' + 'warehouseId' + '}',
                    encodeURIComponent(String(warehouseId))
                );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling removeProfilesWarehouseFromSpace.'
            );
        }

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling removeProfilesWarehouseFromSpace.'
            );
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
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
                body: RemoveProfilesWarehouseFromSpace200Response;
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
                                    'RemoveProfilesWarehouseFromSpace200Response'
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
     * Updates an existing Profiles Warehouse.    • When called, this endpoint may generate the `Profiles Sync Warehouse Updated` event in the [audit trail](/tag/Audit-Trail).
     * @summary Update Profiles Warehouse for Space Warehouse
     * @param spaceId
     * @param warehouseId
     * @param UpdateProfilesWarehouseForSpaceWarehouseAlphaInput
     */
    public async updateProfilesWarehouseForSpaceWarehouse(
        spaceId: string,
        warehouseId: string,
        UpdateProfilesWarehouseForSpaceWarehouseAlphaInput: UpdateProfilesWarehouseForSpaceWarehouseAlphaInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: UpdateProfilesWarehouseForSpaceWarehouse200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/profiles-warehouses/{warehouseId}'
                .replace(
                    '{' + 'spaceId' + '}',
                    encodeURIComponent(String(spaceId))
                )
                .replace(
                    '{' + 'warehouseId' + '}',
                    encodeURIComponent(String(warehouseId))
                );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling updateProfilesWarehouseForSpaceWarehouse.'
            );
        }

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling updateProfilesWarehouseForSpaceWarehouse.'
            );
        }

        // verify required parameter 'UpdateProfilesWarehouseForSpaceWarehouseAlphaInput' is not null or undefined
        if (
            UpdateProfilesWarehouseForSpaceWarehouseAlphaInput === null ||
            UpdateProfilesWarehouseForSpaceWarehouseAlphaInput === undefined
        ) {
            throw new Error(
                'Required parameter UpdateProfilesWarehouseForSpaceWarehouseAlphaInput was null or undefined when calling updateProfilesWarehouseForSpaceWarehouse.'
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
                UpdateProfilesWarehouseForSpaceWarehouseAlphaInput,
                'UpdateProfilesWarehouseForSpaceWarehouseAlphaInput'
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
                body: UpdateProfilesWarehouseForSpaceWarehouse200Response;
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
                                    'UpdateProfilesWarehouseForSpaceWarehouse200Response'
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
     * Updates the schema for a Space Warehouse connection, including Collections and Properties.    • When called, this endpoint may generate the `Profiles Sync Warehouse Modified` event in the [audit trail](/tag/Audit-Trail).
     * @summary Update Selective Sync for Warehouse And Space
     * @param spaceId
     * @param warehouseId
     * @param UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput
     */
    public async updateSelectiveSyncForWarehouseAndSpace(
        spaceId: string,
        warehouseId: string,
        UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput: UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectiveSyncForWarehouseAndSpace200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/profiles-warehouses/{warehouseId}/selective-syncs'
                .replace(
                    '{' + 'spaceId' + '}',
                    encodeURIComponent(String(spaceId))
                )
                .replace(
                    '{' + 'warehouseId' + '}',
                    encodeURIComponent(String(warehouseId))
                );
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1alpha+json',
            'application/json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'spaceId' is not null or undefined
        if (spaceId === null || spaceId === undefined) {
            throw new Error(
                'Required parameter spaceId was null or undefined when calling updateSelectiveSyncForWarehouseAndSpace.'
            );
        }

        // verify required parameter 'warehouseId' is not null or undefined
        if (warehouseId === null || warehouseId === undefined) {
            throw new Error(
                'Required parameter warehouseId was null or undefined when calling updateSelectiveSyncForWarehouseAndSpace.'
            );
        }

        // verify required parameter 'UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput' is not null or undefined
        if (
            UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput === null ||
            UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput === undefined
        ) {
            throw new Error(
                'Required parameter UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput was null or undefined when calling updateSelectiveSyncForWarehouseAndSpace.'
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
                UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput,
                'UpdateSelectiveSyncForWarehouseAndSpaceAlphaInput'
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
                body: UpdateSelectiveSyncForWarehouseAndSpace200Response;
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
                                    'UpdateSelectiveSyncForWarehouseAndSpace200Response'
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
