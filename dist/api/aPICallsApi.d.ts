/// <reference types="node" />
import http from 'http';
import { GetDailyPerSourceAPICallsUsage200Response } from '../model/getDailyPerSourceAPICallsUsage200Response';
import { GetDailyWorkspaceAPICallsUsage200Response } from '../model/getDailyWorkspaceAPICallsUsage200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum APICallsApiApiKeys {
}
export declare class APICallsApi {
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
    setApiKey(key: APICallsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    getDailyPerSourceAPICallsUsage(period: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyPerSourceAPICallsUsage200Response;
    }>;
    getDailyWorkspaceAPICallsUsage(period: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyWorkspaceAPICallsUsage200Response;
    }>;
}
