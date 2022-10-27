/// <reference types="node" />
import http from 'http';
import { CreateTransformation200Response } from '../model/createTransformation200Response';
import { CreateTransformationBetaInput } from '../model/createTransformationBetaInput';
import { DeleteTransformation200Response } from '../model/deleteTransformation200Response';
import { GetTransformation200Response } from '../model/getTransformation200Response';
import { ListTransformations200Response } from '../model/listTransformations200Response';
import { PaginationInput } from '../model/paginationInput';
import { UpdateTransformation200Response } from '../model/updateTransformation200Response';
import { UpdateTransformationBetaInput } from '../model/updateTransformationBetaInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum TransformationsApiApiKeys {
}
export declare class TransformationsApi {
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
    setApiKey(key: TransformationsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createTransformationAlpha(CreateTransformationBetaInput: CreateTransformationBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateTransformation200Response;
    }>;
    createTransformationBeta(CreateTransformationBetaInput: CreateTransformationBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateTransformation200Response;
    }>;
    deleteTransformationAlpha(transformationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTransformation200Response;
    }>;
    deleteTransformationBeta(transformationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTransformation200Response;
    }>;
    getTransformationAlpha(transformationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTransformation200Response;
    }>;
    getTransformationBeta(transformationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTransformation200Response;
    }>;
    listTransformationsAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTransformations200Response;
    }>;
    listTransformationsBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTransformations200Response;
    }>;
    updateTransformationAlpha(transformationId: string, UpdateTransformationBetaInput: UpdateTransformationBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTransformation200Response;
    }>;
    updateTransformationBeta(transformationId: string, UpdateTransformationBetaInput: UpdateTransformationBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTransformation200Response;
    }>;
}
