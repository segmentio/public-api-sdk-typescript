/// <reference types="node" />
import http from 'http';
import { CreateFunction200Response } from '../model/createFunction200Response';
import { CreateFunctionDeployment200Response } from '../model/createFunctionDeployment200Response';
import { CreateFunctionV1Input } from '../model/createFunctionV1Input';
import { CreateInsertFunctionInstance200Response } from '../model/createInsertFunctionInstance200Response';
import { CreateInsertFunctionInstanceAlphaInput } from '../model/createInsertFunctionInstanceAlphaInput';
import { DeleteFunction200Response } from '../model/deleteFunction200Response';
import { DeleteInsertFunctionInstance200Response } from '../model/deleteInsertFunctionInstance200Response';
import { GetFunction200Response } from '../model/getFunction200Response';
import { GetFunctionVersion200Response } from '../model/getFunctionVersion200Response';
import { GetInsertFunctionInstance200Response } from '../model/getInsertFunctionInstance200Response';
import { ListFunctionVersions200Response } from '../model/listFunctionVersions200Response';
import { ListFunctions200Response } from '../model/listFunctions200Response';
import { ListInsertFunctionInstances200Response } from '../model/listInsertFunctionInstances200Response';
import { PaginationInput } from '../model/paginationInput';
import { RestoreFunctionVersion200Response } from '../model/restoreFunctionVersion200Response';
import { RestoreFunctionVersionAlphaInput } from '../model/restoreFunctionVersionAlphaInput';
import { UpdateFunction200Response } from '../model/updateFunction200Response';
import { UpdateFunctionV1Input } from '../model/updateFunctionV1Input';
import { UpdateInsertFunctionInstance200Response } from '../model/updateInsertFunctionInstance200Response';
import { UpdateInsertFunctionInstanceAlphaInput } from '../model/updateInsertFunctionInstanceAlphaInput';
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
    createInsertFunctionInstance(CreateInsertFunctionInstanceAlphaInput: CreateInsertFunctionInstanceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateInsertFunctionInstance200Response;
    }>;
    deleteFunction(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteFunction200Response;
    }>;
    deleteInsertFunctionInstance(instanceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteInsertFunctionInstance200Response;
    }>;
    getFunction(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFunction200Response;
    }>;
    getFunctionVersion(functionId: string, versionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFunctionVersion200Response;
    }>;
    getInsertFunctionInstance(instanceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetInsertFunctionInstance200Response;
    }>;
    listFunctionVersions(functionId: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFunctionVersions200Response;
    }>;
    listFunctions(resourceType: 'DESTINATION' | 'INSERT' | 'INSERT_DESTINATION' | 'INSERT_SOURCE' | 'SOURCE', pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFunctions200Response;
    }>;
    listInsertFunctionInstances(functionId: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInsertFunctionInstances200Response;
    }>;
    restoreFunctionVersion(functionId: string, RestoreFunctionVersionAlphaInput: RestoreFunctionVersionAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RestoreFunctionVersion200Response;
    }>;
    updateFunction(functionId: string, UpdateFunctionV1Input: UpdateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFunction200Response;
    }>;
    updateInsertFunctionInstance(instanceId: string, UpdateInsertFunctionInstanceAlphaInput: UpdateInsertFunctionInstanceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateInsertFunctionInstance200Response;
    }>;
}
