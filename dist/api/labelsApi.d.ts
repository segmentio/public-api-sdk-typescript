/// <reference types="node" />
import http from 'http';
import { CreateLabel201Response } from '../model/createLabel201Response';
import { CreateLabelV1Input } from '../model/createLabelV1Input';
import { DeleteLabel200Response } from '../model/deleteLabel200Response';
import { ListLabels200Response } from '../model/listLabels200Response';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum LabelsApiApiKeys {
}
export declare class LabelsApi {
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
    setApiKey(key: LabelsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createLabel(CreateLabelV1Input: CreateLabelV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateLabel201Response;
    }>;
    deleteLabel(key: string, value: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteLabel200Response;
    }>;
    listLabels(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListLabels200Response;
    }>;
}
