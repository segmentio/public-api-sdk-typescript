/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 55.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { Echo200Response } from '../model/echo200Response';
import { Echo200Response1 } from '../model/echo200Response1';
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

export enum TestingApiApiKeys {}

export class TestingApi {
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

    public setApiKey(key: TestingApiApiKeys, value: string) {
        (this.authentications as any)[TestingApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.token.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Public Echo endpoint.
     * @summary Echo
     * @param message Sets the response &#x60;message&#x60; field. The response contains this field\&#39;s entry.  This parameter exists in alpha.
     * @param delay The desired response delay, in milliseconds.  This parameter exists in alpha.
     * @param triggerError If &#x60;true&#x60;, returns an HTTP &#x60;4xx&#x60; error that contains the string in &#x60;message&#x60;.  This parameter exists in alpha.
     * @param triggerMultipleErrors If &#x60;true&#x60;, returns an HTTP &#x60;4xx&#x60; error that contains the value of the &#x60;message&#x60; field in the error message array.  This has no effect if the request sets &#x60;triggerError&#x60;.  This parameter exists in alpha.
     * @param triggerUnexpectedError If &#x60;true&#x60;, triggers a &#x60;500&#x60; error.  This has no effect if the request sets either &#x60;triggerError&#x60; or &#x60;triggerMultipleErrors&#x60;.  This parameter exists in alpha.
     * @param statusCode Sets the HTTP status code to return.  This parameter exists in alpha.
     */
    public async echo(
        message: string,
        delay?: number,
        triggerError?: boolean,
        triggerMultipleErrors?: boolean,
        triggerUnexpectedError?: boolean,
        statusCode?: number,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{ response: http.IncomingMessage; body: Echo200Response }> {
        const localVarPath = this.basePath + '/echo';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign(
            {},
            this._defaultHeaders
        );
        const produces = [
            'application/vnd.segment.v1+json',
            'application/json',
            'application/vnd.segment.v1alpha+json',
        ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'message' is not null or undefined
        if (message === null || message === undefined) {
            throw new Error(
                'Required parameter message was null or undefined when calling echo.'
            );
        }

        if (message !== undefined) {
            localVarQueryParameters['message'] = ObjectSerializer.serialize(
                message,
                'string'
            );
        }

        if (delay !== undefined) {
            localVarQueryParameters['delay'] = ObjectSerializer.serialize(
                delay,
                'number'
            );
        }

        if (triggerError !== undefined) {
            localVarQueryParameters['triggerError'] =
                ObjectSerializer.serialize(triggerError, 'boolean');
        }

        if (triggerMultipleErrors !== undefined) {
            localVarQueryParameters['triggerMultipleErrors'] =
                ObjectSerializer.serialize(triggerMultipleErrors, 'boolean');
        }

        if (triggerUnexpectedError !== undefined) {
            localVarQueryParameters['triggerUnexpectedError'] =
                ObjectSerializer.serialize(triggerUnexpectedError, 'boolean');
        }

        if (statusCode !== undefined) {
            localVarQueryParameters['statusCode'] = ObjectSerializer.serialize(
                statusCode,
                'number'
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
                body: Echo200Response;
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
                                    'Echo200Response'
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
