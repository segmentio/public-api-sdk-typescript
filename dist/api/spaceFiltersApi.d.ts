/// <reference types="node" />
import http from 'http';
import { CreateFilterForSpace200Response } from '../model/createFilterForSpace200Response';
import { CreateFilterForSpaceInput } from '../model/createFilterForSpaceInput';
import { DeleteFilterById200Response } from '../model/deleteFilterById200Response';
import { GetFilterById200Response } from '../model/getFilterById200Response';
import { ListFiltersForSpace200Response } from '../model/listFiltersForSpace200Response';
import { ListFiltersPaginationInput } from '../model/listFiltersPaginationInput';
import { UpdateFilterById200Response } from '../model/updateFilterById200Response';
import { UpdateFilterByIdInput } from '../model/updateFilterByIdInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum SpaceFiltersApiApiKeys {
}
export declare class SpaceFiltersApi {
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
    setApiKey(key: SpaceFiltersApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createFilterForSpace(CreateFilterForSpaceInput: CreateFilterForSpaceInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFilterForSpace200Response;
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
    listFiltersForSpace(integrationId: string, pagination?: ListFiltersPaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFiltersForSpace200Response;
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
