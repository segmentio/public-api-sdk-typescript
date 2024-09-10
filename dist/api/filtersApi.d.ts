/// <reference types="node" />
import http from 'http';
import { CreateFilter200Response } from '../model/createFilter200Response';
import { CreateFilterInput } from '../model/createFilterInput';
import { DeleteFilterById200Response } from '../model/deleteFilterById200Response';
import { GetFilterById200Response } from '../model/getFilterById200Response';
import { ListFiltersByIntegrationId200Response } from '../model/listFiltersByIntegrationId200Response';
import { ListFiltersPaginationInput } from '../model/listFiltersPaginationInput';
import { UpdateFilterById200Response } from '../model/updateFilterById200Response';
import { UpdateFilterByIdInput } from '../model/updateFilterByIdInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum FiltersApiApiKeys {
}
export declare class FiltersApi {
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
    setApiKey(key: FiltersApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createFilter(CreateFilterInput: CreateFilterInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFilter200Response;
    }>;
    deleteFilterById(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteFilterById200Response;
    }>;
    getFilterById(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFilterById200Response;
    }>;
    listFiltersByIntegrationId(integrationId: string, pagination?: ListFiltersPaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFiltersByIntegrationId200Response;
    }>;
    updateFilterById(id: string, UpdateFilterByIdInput: UpdateFilterByIdInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFilterById200Response;
    }>;
}
