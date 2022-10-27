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
    getDestinationMetadataAlpha(destinationMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationMetadata200Response;
    }>;
    getDestinationMetadataBeta(destinationMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationMetadata200Response;
    }>;
    getDestinationMetadataCurrent(destinationMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationMetadata200Response;
    }>;
    getDestinationMetadataV1(destinationMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationMetadata200Response;
    }>;
    getDestinationsCatalogAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationsCatalog200Response;
    }>;
    getDestinationsCatalogBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationsCatalog200Response;
    }>;
    getDestinationsCatalogCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationsCatalog200Response;
    }>;
    getDestinationsCatalogV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestinationsCatalog200Response;
    }>;
    getSourceMetadataAlpha(sourceMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourceMetadata200Response;
    }>;
    getSourceMetadataBeta(sourceMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourceMetadata200Response;
    }>;
    getSourceMetadataCurrent(sourceMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourceMetadata200Response;
    }>;
    getSourceMetadataV1(sourceMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourceMetadata200Response;
    }>;
    getSourcesCatalogAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourcesCatalog200Response;
    }>;
    getSourcesCatalogBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourcesCatalog200Response;
    }>;
    getSourcesCatalogCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourcesCatalog200Response;
    }>;
    getSourcesCatalogV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSourcesCatalog200Response;
    }>;
    getWarehouseMetadataAlpha(warehouseMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouseMetadata200Response;
    }>;
    getWarehouseMetadataBeta(warehouseMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouseMetadata200Response;
    }>;
    getWarehouseMetadataCurrent(warehouseMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouseMetadata200Response;
    }>;
    getWarehouseMetadataV1(warehouseMetadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouseMetadata200Response;
    }>;
    getWarehousesCatalogAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehousesCatalog200Response;
    }>;
    getWarehousesCatalogBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehousesCatalog200Response;
    }>;
    getWarehousesCatalogCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehousesCatalog200Response;
    }>;
    getWarehousesCatalogV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehousesCatalog200Response;
    }>;
}
