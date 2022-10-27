/// <reference types="node" />
import http from 'http';
import { CreateLabel200Response } from '../model/createLabel200Response';
import { CreateLabel200Response1 } from '../model/createLabel200Response1';
import { CreateLabelAlphaInput } from '../model/createLabelAlphaInput';
import { CreateLabelV1Input } from '../model/createLabelV1Input';
import { DeleteLabel200Response } from '../model/deleteLabel200Response';
import { DeleteLabel200Response1 } from '../model/deleteLabel200Response1';
import { ListLabels200Response } from '../model/listLabels200Response';
import { ListLabels200Response1 } from '../model/listLabels200Response1';
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
    createLabelAlpha(CreateLabelAlphaInput: CreateLabelAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateLabel200Response;
    }>;
    createLabelBeta(CreateLabelV1Input: CreateLabelV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateLabel200Response1;
    }>;
    createLabelCurrent(CreateLabelV1Input: CreateLabelV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateLabel200Response1;
    }>;
    createLabelV1(CreateLabelV1Input: CreateLabelV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateLabel200Response1;
    }>;
    deleteLabelAlpha(key: string, value: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteLabel200Response;
    }>;
    deleteLabelBeta(key: string, value: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteLabel200Response1;
    }>;
    deleteLabelCurrent(key: string, value: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteLabel200Response1;
    }>;
    deleteLabelV1(key: string, value: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteLabel200Response1;
    }>;
    listLabelsAlpha(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListLabels200Response;
    }>;
    listLabelsBeta(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListLabels200Response1;
    }>;
    listLabelsCurrent(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListLabels200Response1;
    }>;
    listLabelsV1(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListLabels200Response1;
    }>;
}
