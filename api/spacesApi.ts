/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 36.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BatchQueryMessagingSubscriptionsForSpace200Response } from '../model/batchQueryMessagingSubscriptionsForSpace200Response';
import { BatchQueryMessagingSubscriptionsForSpaceAlphaInput } from '../model/batchQueryMessagingSubscriptionsForSpaceAlphaInput';
import { GetSpace200Response } from '../model/getSpace200Response';
import { ReplaceMessagingSubscriptionsInSpaces200Response } from '../model/replaceMessagingSubscriptionsInSpaces200Response';
import { ReplaceMessagingSubscriptionsInSpacesAlphaInput } from '../model/replaceMessagingSubscriptionsInSpacesAlphaInput';
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

export enum SpacesApiApiKeys {}

export class SpacesApi {
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

    public setApiKey(key: SpacesApiApiKeys, value: string) {
        (this.authentications as any)[SpacesApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.token.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Get Messaging Subscriptions for space.  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Spaces feature enabled. Please reach out to your customer success manager for more information.
     * @summary Batch Query Messaging Subscriptions for Space
     * @param spaceId
     * @param BatchQueryMessagingSubscriptionsForSpaceAlphaInput
     */
    public async batchQueryMessagingSubscriptionsForSpace(
        spaceId: string,
        BatchQueryMessagingSubscriptionsForSpaceAlphaInput: BatchQueryMessagingSubscriptionsForSpaceAlphaInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: BatchQueryMessagingSubscriptionsForSpace200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/messaging-subscriptions/batch'.replace(
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
                'Required parameter spaceId was null or undefined when calling batchQueryMessagingSubscriptionsForSpace.'
            );
        }

        // verify required parameter 'BatchQueryMessagingSubscriptionsForSpaceAlphaInput' is not null or undefined
        if (
            BatchQueryMessagingSubscriptionsForSpaceAlphaInput === null ||
            BatchQueryMessagingSubscriptionsForSpaceAlphaInput === undefined
        ) {
            throw new Error(
                'Required parameter BatchQueryMessagingSubscriptionsForSpaceAlphaInput was null or undefined when calling batchQueryMessagingSubscriptionsForSpace.'
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
                BatchQueryMessagingSubscriptionsForSpaceAlphaInput,
                'BatchQueryMessagingSubscriptionsForSpaceAlphaInput'
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
                body: BatchQueryMessagingSubscriptionsForSpace200Response;
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
                                    'BatchQueryMessagingSubscriptionsForSpace200Response'
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
     * Returns the Space by id.  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Spaces feature enabled. Please reach out to your customer success manager for more information.
     * @summary Get Space
     * @param spaceId
     */
    public async getSpace(
        spaceId: string,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{ response: http.IncomingMessage; body: GetSpace200Response }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}'.replace(
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
                'Required parameter spaceId was null or undefined when calling getSpace.'
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
                body: GetSpace200Response;
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
                                    'GetSpace200Response'
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
     * Replace Messaging Subscriptions in Spaces.  • This endpoint is in **Alpha** testing.  Please submit any feedback by sending email to friends@segment.com.   • In order to successfully call this endpoint, the specified Workspace needs to have the Spaces feature enabled. Please reach out to your customer success manager for more information.   The rate limit for this endpoint is 60 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Replace Messaging Subscriptions in Spaces
     * @param spaceId
     * @param ReplaceMessagingSubscriptionsInSpacesAlphaInput
     */
    public async replaceMessagingSubscriptionsInSpaces(
        spaceId: string,
        ReplaceMessagingSubscriptionsInSpacesAlphaInput: ReplaceMessagingSubscriptionsInSpacesAlphaInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: ReplaceMessagingSubscriptionsInSpaces200Response;
    }> {
        const localVarPath =
            this.basePath +
            '/spaces/{spaceId}/messaging-subscriptions'.replace(
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
                'Required parameter spaceId was null or undefined when calling replaceMessagingSubscriptionsInSpaces.'
            );
        }

        // verify required parameter 'ReplaceMessagingSubscriptionsInSpacesAlphaInput' is not null or undefined
        if (
            ReplaceMessagingSubscriptionsInSpacesAlphaInput === null ||
            ReplaceMessagingSubscriptionsInSpacesAlphaInput === undefined
        ) {
            throw new Error(
                'Required parameter ReplaceMessagingSubscriptionsInSpacesAlphaInput was null or undefined when calling replaceMessagingSubscriptionsInSpaces.'
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
                ReplaceMessagingSubscriptionsInSpacesAlphaInput,
                'ReplaceMessagingSubscriptionsInSpacesAlphaInput'
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
                body: ReplaceMessagingSubscriptionsInSpaces200Response;
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
                                    'ReplaceMessagingSubscriptionsInSpaces200Response'
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
