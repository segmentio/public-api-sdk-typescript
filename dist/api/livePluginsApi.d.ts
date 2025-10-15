/// <reference types="node" />
import http from 'http';
import { CreateLivePlugin200Response } from '../model/createLivePlugin200Response';
import { CreateLivePluginAlphaInput } from '../model/createLivePluginAlphaInput';
import { DeleteLivePluginCode200Response } from '../model/deleteLivePluginCode200Response';
import { GetLatestFromLivePlugins200Response } from '../model/getLatestFromLivePlugins200Response';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum LivePluginsApiApiKeys {
}
export declare class LivePluginsApi {
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
    setApiKey(key: LivePluginsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createLivePlugin(sourceId: string, CreateLivePluginAlphaInput: CreateLivePluginAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateLivePlugin200Response;
    }>;
    deleteLivePluginCode(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteLivePluginCode200Response;
    }>;
    getLatestFromLivePlugins(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetLatestFromLivePlugins200Response;
    }>;
}
