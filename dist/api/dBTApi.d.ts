/// <reference types="node" />
import http from 'http';
import { CreateDbtModelSyncTrigger200Response } from '../model/createDbtModelSyncTrigger200Response';
import { CreateDbtModelSyncTriggerInput } from '../model/createDbtModelSyncTriggerInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum DBTApiApiKeys {
}
export declare class DBTApi {
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
    setApiKey(key: DBTApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createDbtModelSyncTrigger(CreateDbtModelSyncTriggerInput: CreateDbtModelSyncTriggerInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateDbtModelSyncTrigger200Response;
    }>;
}
