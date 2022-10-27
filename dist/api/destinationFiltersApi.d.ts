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
    createFilterForDestinationAlpha(destinationId: string, CreateFilterForDestinationV1Input: CreateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFilterForDestination200Response;
    }>;
    createFilterForDestinationBeta(destinationId: string, CreateFilterForDestinationV1Input: CreateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFilterForDestination200Response;
    }>;
    createFilterForDestinationCurrent(destinationId: string, CreateFilterForDestinationV1Input: CreateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFilterForDestination200Response;
    }>;
    createFilterForDestinationV1(destinationId: string, CreateFilterForDestinationV1Input: CreateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateFilterForDestination200Response;
    }>;
    getFilterInDestinationAlpha(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFilterInDestination200Response;
    }>;
    getFilterInDestinationBeta(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFilterInDestination200Response;
    }>;
    getFilterInDestinationCurrent(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFilterInDestination200Response;
    }>;
    getFilterInDestinationV1(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetFilterInDestination200Response;
    }>;
    listFiltersFromDestinationAlpha(destinationId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFiltersFromDestination200Response;
    }>;
    listFiltersFromDestinationBeta(destinationId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFiltersFromDestination200Response;
    }>;
    listFiltersFromDestinationCurrent(destinationId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFiltersFromDestination200Response;
    }>;
    listFiltersFromDestinationV1(destinationId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListFiltersFromDestination200Response;
    }>;
    previewDestinationFilterAlpha(PreviewDestinationFilterV1Input: PreviewDestinationFilterV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PreviewDestinationFilter200Response;
    }>;
    previewDestinationFilterBeta(PreviewDestinationFilterV1Input: PreviewDestinationFilterV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PreviewDestinationFilter200Response;
    }>;
    previewDestinationFilterCurrent(PreviewDestinationFilterV1Input: PreviewDestinationFilterV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PreviewDestinationFilter200Response;
    }>;
    previewDestinationFilterV1(PreviewDestinationFilterV1Input: PreviewDestinationFilterV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PreviewDestinationFilter200Response;
    }>;
    removeFilterFromDestinationAlpha(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveFilterFromDestination200Response;
    }>;
    removeFilterFromDestinationBeta(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveFilterFromDestination200Response;
    }>;
    removeFilterFromDestinationCurrent(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveFilterFromDestination200Response;
    }>;
    removeFilterFromDestinationV1(destinationId: string, filterId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveFilterFromDestination200Response;
    }>;
    updateFilterForDestinationAlpha(destinationId: string, filterId: string, UpdateFilterForDestinationV1Input: UpdateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFilterForDestination200Response;
    }>;
    updateFilterForDestinationBeta(destinationId: string, filterId: string, UpdateFilterForDestinationV1Input: UpdateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFilterForDestination200Response;
    }>;
    updateFilterForDestinationCurrent(destinationId: string, filterId: string, UpdateFilterForDestinationV1Input: UpdateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFilterForDestination200Response;
    }>;
    updateFilterForDestinationV1(destinationId: string, filterId: string, UpdateFilterForDestinationV1Input: UpdateFilterForDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateFilterForDestination200Response;
    }>;
}
