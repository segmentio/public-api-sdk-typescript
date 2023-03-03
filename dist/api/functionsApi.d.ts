/// <reference types="node" />
import http from 'http';
import { CreateFunction200Response } from '../model/createFunction200Response';
import { CreateFunctionDeployment200Response } from '../model/createFunctionDeployment200Response';
import { CreateFunctionV1Input } from '../model/createFunctionV1Input';
import { DeleteFunction200Response } from '../model/deleteFunction200Response';
import { GetFunction200Response } from '../model/getFunction200Response';
import { HandleWebhook200Response } from '../model/handleWebhook200Response';
import { HandleWebhookInput } from '../model/handleWebhookInput';
import { ListFunctions200Response } from '../model/listFunctions200Response';
import { PaginationInput } from '../model/paginationInput';
import { UpdateFunction200Response } from '../model/updateFunction200Response';
import { UpdateFunctionV1Input } from '../model/updateFunctionV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum FunctionsApiApiKeys {
}
export declare class FunctionsApi {
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
    setApiKey(key: FunctionsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createFunction(CreateFunctionV1Input: CreateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunction200Response;
    }>;
    createFunctionDeployment(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunctionDeployment200Response;
    }>;
    deleteFunction(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteFunction200Response;
    }>;
    getFunction(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFunction200Response;
    }>;
    handleWebhook(HandleWebhookInput: HandleWebhookInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HandleWebhook200Response;
    }>;
    listFunctions(pagination: PaginationInput, resourceType: 'DESTINATION' | 'INSERT_DESTINATION' | 'SOURCE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFunctions200Response;
    }>;
    updateFunction(functionId: string, UpdateFunctionV1Input: UpdateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFunction200Response;
    }>;
}
