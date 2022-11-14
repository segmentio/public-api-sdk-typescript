/// <reference types="node" />
import http from 'http';
import { GetDestinationMetadata200Response } from '../model/getDestinationMetadata200Response';
import { GetDestinationsCatalog200Response } from '../model/getDestinationsCatalog200Response';
import { GetSourceMetadata200Response } from '../model/getSourceMetadata200Response';
import { GetSourcesCatalog200Response } from '../model/getSourcesCatalog200Response';
import { GetWarehouseMetadata200Response } from '../model/getWarehouseMetadata200Response';
import { GetWarehousesCatalog200Response } from '../model/getWarehousesCatalog200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum CatalogApiApiKeys {
}
export declare class CatalogApi {
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
    setApiKey(key: CatalogApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    getDestinationMetadata(destinationMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationMetadata200Response;
    }>;
    getDestinationsCatalog(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationsCatalog200Response;
    }>;
    getSourceMetadata(sourceMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourceMetadata200Response;
    }>;
    getSourcesCatalog(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourcesCatalog200Response;
    }>;
    getWarehouseMetadata(warehouseMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouseMetadata200Response;
    }>;
    getWarehousesCatalog(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehousesCatalog200Response;
    }>;
}
