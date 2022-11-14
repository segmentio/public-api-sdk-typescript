/// <reference types="node" />
import http from 'http';
import { AddConnectionFromSourceToWarehouse200Response } from '../model/addConnectionFromSourceToWarehouse200Response';
import { CreateValidationInWarehouse200Response } from '../model/createValidationInWarehouse200Response';
import { CreateValidationInWarehouseV1Input } from '../model/createValidationInWarehouseV1Input';
import { CreateWarehouse200Response } from '../model/createWarehouse200Response';
import { CreateWarehouseV1Input } from '../model/createWarehouseV1Input';
import { DeleteWarehouse200Response } from '../model/deleteWarehouse200Response';
import { GetConnectionStateFromWarehouse200Response } from '../model/getConnectionStateFromWarehouse200Response';
import { GetWarehouse200Response } from '../model/getWarehouse200Response';
import { ListConnectedSourcesFromWarehouse200Response } from '../model/listConnectedSourcesFromWarehouse200Response';
import { ListWarehouses200Response } from '../model/listWarehouses200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveSourceConnectionFromWarehouse200Response } from '../model/removeSourceConnectionFromWarehouse200Response';
import { UpdateWarehouse200Response } from '../model/updateWarehouse200Response';
import { UpdateWarehouseV1Input } from '../model/updateWarehouseV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum WarehousesApiApiKeys {
}
export declare class WarehousesApi {
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
    setApiKey(key: WarehousesApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addConnectionFromSourceToWarehouse(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddConnectionFromSourceToWarehouse200Response;
    }>;
    createValidationInWarehouse(CreateValidationInWarehouseV1Input: CreateValidationInWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateValidationInWarehouse200Response;
    }>;
    createWarehouse(CreateWarehouseV1Input: CreateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWarehouse200Response;
    }>;
    deleteWarehouse(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteWarehouse200Response;
    }>;
    getConnectionStateFromWarehouse(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetConnectionStateFromWarehouse200Response;
    }>;
    getWarehouse(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouse200Response;
    }>;
    listConnectedSourcesFromWarehouse(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedSourcesFromWarehouse200Response;
    }>;
    listWarehouses(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWarehouses200Response;
    }>;
    removeSourceConnectionFromWarehouse(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceConnectionFromWarehouse200Response;
    }>;
    updateWarehouse(warehouseId: string, UpdateWarehouseV1Input: UpdateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateWarehouse200Response;
    }>;
}
