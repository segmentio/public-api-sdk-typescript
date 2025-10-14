/// <reference types="node" />
import http from 'http';
import { CreateEdgeFunctions200Response } from '../model/createEdgeFunctions200Response';
import { CreateEdgeFunctionsAlphaInput } from '../model/createEdgeFunctionsAlphaInput';
import { DisableEdgeFunctions200Response } from '../model/disableEdgeFunctions200Response';
import { GenerateUploadURLForEdgeFunctions200Response } from '../model/generateUploadURLForEdgeFunctions200Response';
import { GetLatestFromEdgeFunctions200Response } from '../model/getLatestFromEdgeFunctions200Response';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum EdgeFunctionsApiApiKeys {
}
export declare class EdgeFunctionsApi {
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
    setApiKey(key: EdgeFunctionsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createEdgeFunctions(sourceId: string, CreateEdgeFunctionsAlphaInput: CreateEdgeFunctionsAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateEdgeFunctions200Response;
    }>;
    disableEdgeFunctions(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DisableEdgeFunctions200Response;
    }>;
    generateUploadURLForEdgeFunctions(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GenerateUploadURLForEdgeFunctions200Response;
    }>;
    getLatestFromEdgeFunctions(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetLatestFromEdgeFunctions200Response;
    }>;
}
