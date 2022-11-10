/// <reference types="node" />
import http from 'http';
import { GetEventsVolumeFromWorkspace200Response } from '../model/getEventsVolumeFromWorkspace200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum EventsApiApiKeys {
}
export declare class EventsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        token: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: EventsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    getEventsVolumeFromWorkspace(granularity: 'DAY' | 'HOUR' | 'MINUTE', startTime: string, endTime: string, groupBy?: Array<string>, sourceId?: Array<string>, eventName?: Array<string>, eventType?: Array<string>, appVersion?: Array<string>, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEventsVolumeFromWorkspace200Response;
    }>;
}
