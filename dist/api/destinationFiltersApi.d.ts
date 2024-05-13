/// <reference types="node" />
import http from 'http';
import { CreateFilterForDestination200Response } from '../model/createFilterForDestination200Response';
import { CreateFilterForDestinationV1Input } from '../model/createFilterForDestinationV1Input';
import { GetFilterInDestination200Response } from '../model/getFilterInDestination200Response';
import { ListFiltersFromDestination200Response } from '../model/listFiltersFromDestination200Response';
import { PaginationInput } from '../model/paginationInput';
import { PreviewDestinationFilter200Response } from '../model/previewDestinationFilter200Response';
import { PreviewDestinationFilterV1Input } from '../model/previewDestinationFilterV1Input';
import { RemoveFilterFromDestination200Response } from '../model/removeFilterFromDestination200Response';
import { UpdateFilterForDestination200Response } from '../model/updateFilterForDestination200Response';
import { UpdateFilterForDestinationV1Input } from '../model/updateFilterForDestinationV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum DestinationFiltersApiApiKeys {
}
export declare class DestinationFiltersApi {
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
    setApiKey(key: DestinationFiltersApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createFilterForDestination(destinationId: string, CreateFilterForDestinationV1Input: CreateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFilterForDestination200Response;
    }>;
    getFilterInDestination(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFilterInDestination200Response;
    }>;
    listFiltersFromDestination(destinationId: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFiltersFromDestination200Response;
    }>;
    previewDestinationFilter(PreviewDestinationFilterV1Input: PreviewDestinationFilterV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PreviewDestinationFilter200Response;
    }>;
    removeFilterFromDestination(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveFilterFromDestination200Response;
    }>;
    updateFilterForDestination(destinationId: string, filterId: string, UpdateFilterForDestinationV1Input: UpdateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFilterForDestination200Response;
    }>;
}
