/// <reference types="node" />
import http from 'http';
import { CreateFunction200Response } from '../model/createFunction200Response';
import { CreateFunctionDeployment200Response } from '../model/createFunctionDeployment200Response';
import { CreateFunctionV1Input } from '../model/createFunctionV1Input';
import { DeleteFunction200Response } from '../model/deleteFunction200Response';
import { GetFunction200Response } from '../model/getFunction200Response';
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
    createFunctionAlpha(CreateFunctionV1Input: CreateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunction200Response;
    }>;
    createFunctionBeta(CreateFunctionV1Input: CreateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunction200Response;
    }>;
    createFunctionCurrent(CreateFunctionV1Input: CreateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunction200Response;
    }>;
    createFunctionDeploymentAlpha(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunctionDeployment200Response;
    }>;
    createFunctionDeploymentBeta(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunctionDeployment200Response;
    }>;
    createFunctionDeploymentCurrent(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunctionDeployment200Response;
    }>;
    createFunctionDeploymentV1(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunctionDeployment200Response;
    }>;
    createFunctionV1(CreateFunctionV1Input: CreateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFunction200Response;
    }>;
    deleteFunctionAlpha(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteFunction200Response;
    }>;
    deleteFunctionBeta(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteFunction200Response;
    }>;
    deleteFunctionCurrent(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteFunction200Response;
    }>;
    deleteFunctionV1(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteFunction200Response;
    }>;
    getFunctionAlpha(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFunction200Response;
    }>;
    getFunctionBeta(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFunction200Response;
    }>;
    getFunctionCurrent(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFunction200Response;
    }>;
    getFunctionV1(functionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFunction200Response;
    }>;
    listFunctionsAlpha(pagination: PaginationInput, resourceType: 'DESTINATION' | 'SOURCE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFunctions200Response;
    }>;
    listFunctionsBeta(pagination: PaginationInput, resourceType: 'DESTINATION' | 'SOURCE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFunctions200Response;
    }>;
    listFunctionsCurrent(pagination: PaginationInput, resourceType: 'DESTINATION' | 'SOURCE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFunctions200Response;
    }>;
    listFunctionsV1(pagination: PaginationInput, resourceType: 'DESTINATION' | 'SOURCE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFunctions200Response;
    }>;
    updateFunctionAlpha(functionId: string, UpdateFunctionV1Input: UpdateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFunction200Response;
    }>;
    updateFunctionBeta(functionId: string, UpdateFunctionV1Input: UpdateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFunction200Response;
    }>;
    updateFunctionCurrent(functionId: string, UpdateFunctionV1Input: UpdateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFunction200Response;
    }>;
    updateFunctionV1(functionId: string, UpdateFunctionV1Input: UpdateFunctionV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFunction200Response;
    }>;
}
