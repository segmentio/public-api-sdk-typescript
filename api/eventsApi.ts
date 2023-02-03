/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.0.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { GetEventsVolumeFromWorkspace200Response } from '../model/getEventsVolumeFromWorkspace200Response';
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

export enum EventsApiApiKeys {}

export class EventsApi {
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

    public setApiKey(key: EventsApiApiKeys, value: string) {
        (this.authentications as any)[EventsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.token.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Enumerates the Workspace event volumes over time in minute increments.   The rate limit for this endpoint is 20 requests per minute, which is lower than the default due to access pattern restrictions. Once reached, this endpoint will respond with the 429 HTTP status code with headers indicating the limit parameters. See [Rate Limiting](/#tag/Rate-Limits) for more information.
     * @summary Get Events Volume from Workspace
     * @param granularity The size of each bucket in the requested window.  This parameter exists in v1.
     * @param startTime The ISO8601 formatted timestamp that corresponds to the beginning of the requested time frame, inclusive.  This parameter exists in v1.
     * @param endTime The ISO8601 formatted timestamp that corresponds to the end of the requested time frame, noninclusive. Segment recommends that you lag queries 1 minute behind clock time to reduce the risk for latency to impact the counts.  This parameter exists in v1.
     * @param groupBy A comma-delimited list of strings that represents the dimensions to group the result by. The options are: &#x60;eventName&#x60;, &#x60;eventType&#x60; and &#x60;source&#x60;.  This parameter exists in v1.
     * @param sourceId A list of strings which filters the results to the given SourceIds.  This parameter exists in v1.
     * @param eventName A list of strings which filters the results to the given EventNames.  This parameter exists in v1.
     * @param eventType A list of strings which filters the results to the given EventTypes.  This parameter exists in v1.
     * @param appVersion A list of strings which filters the results to the given AppVersions.  This parameter exists in v1.
     * @param pagination Pagination input for event volume by Workspace.  This parameter exists in v1.
     */
    public async getEventsVolumeFromWorkspace(
        granularity: 'DAY' | 'HOUR' | 'MINUTE',
        startTime: string,
        endTime: string,
        groupBy?: Array<string>,
        sourceId?: Array<string>,
        eventName?: Array<string>,
        eventType?: Array<string>,
        appVersion?: Array<string>,
        pagination?: PaginationInput,
        options: { headers: { [name: string]: string } } = { headers: {} }
    ): Promise<{
        response: http.IncomingMessage;
        body: GetEventsVolumeFromWorkspace200Response;
    }> {
        const localVarPath = this.basePath + '/events/volume';
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

        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new Error(
                'Required parameter granularity was null or undefined when calling getEventsVolumeFromWorkspace.'
            );
        }

        // verify required parameter 'startTime' is not null or undefined
        if (startTime === null || startTime === undefined) {
            throw new Error(
                'Required parameter startTime was null or undefined when calling getEventsVolumeFromWorkspace.'
            );
        }

        // verify required parameter 'endTime' is not null or undefined
        if (endTime === null || endTime === undefined) {
            throw new Error(
                'Required parameter endTime was null or undefined when calling getEventsVolumeFromWorkspace.'
            );
        }

        if (granularity !== undefined) {
            localVarQueryParameters['granularity'] = ObjectSerializer.serialize(
                granularity,
                "'DAY' | 'HOUR' | 'MINUTE'"
            );
        }

        if (startTime !== undefined) {
            localVarQueryParameters['startTime'] = ObjectSerializer.serialize(
                startTime,
                'string'
            );
        }

        if (endTime !== undefined) {
            localVarQueryParameters['endTime'] = ObjectSerializer.serialize(
                endTime,
                'string'
            );
        }

        if (groupBy !== undefined) {
            localVarQueryParameters['groupBy'] = ObjectSerializer.serialize(
                groupBy,
                'Array<string>'
            );
        }

        if (sourceId !== undefined) {
            localVarQueryParameters['sourceId'] = ObjectSerializer.serialize(
                sourceId,
                'Array<string>'
            );
        }

        if (eventName !== undefined) {
            localVarQueryParameters['eventName'] = ObjectSerializer.serialize(
                eventName,
                'Array<string>'
            );
        }

        if (eventType !== undefined) {
            localVarQueryParameters['eventType'] = ObjectSerializer.serialize(
                eventType,
                'Array<string>'
            );
        }

        if (appVersion !== undefined) {
            localVarQueryParameters['appVersion'] = ObjectSerializer.serialize(
                appVersion,
                'Array<string>'
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
                body: GetEventsVolumeFromWorkspace200Response;
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
                                    'GetEventsVolumeFromWorkspace200Response'
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
