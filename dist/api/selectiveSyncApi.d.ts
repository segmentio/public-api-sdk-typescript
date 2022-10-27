/// <reference types="node" />
import http from 'http';
import { GetAdvancedSyncScheduleFromWarehouse200Response } from '../model/getAdvancedSyncScheduleFromWarehouse200Response';
import { ListSelectiveSyncsFromWarehouseAndSource200Response } from '../model/listSelectiveSyncsFromWarehouseAndSource200Response';
import { ListSyncsFromWarehouse200Response } from '../model/listSyncsFromWarehouse200Response';
import { ListSyncsFromWarehouseAndSource200Response } from '../model/listSyncsFromWarehouseAndSource200Response';
import { PaginationInput } from '../model/paginationInput';
import { ReplaceAdvancedSyncScheduleForWarehouse200Response } from '../model/replaceAdvancedSyncScheduleForWarehouse200Response';
import { ReplaceAdvancedSyncScheduleForWarehouseV1Input } from '../model/replaceAdvancedSyncScheduleForWarehouseV1Input';
import { UpdateSelectiveSyncForWarehouse200Response } from '../model/updateSelectiveSyncForWarehouse200Response';
import { UpdateSelectiveSyncForWarehouseV1Input } from '../model/updateSelectiveSyncForWarehouseV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum SelectiveSyncApiApiKeys {
}
export declare class SelectiveSyncApi {
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
    setApiKey(key: SelectiveSyncApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    getAdvancedSyncScheduleFromWarehouseAlpha(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAdvancedSyncScheduleFromWarehouse200Response;
    }>;
    getAdvancedSyncScheduleFromWarehouseBeta(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAdvancedSyncScheduleFromWarehouse200Response;
    }>;
    getAdvancedSyncScheduleFromWarehouseCurrent(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAdvancedSyncScheduleFromWarehouse200Response;
    }>;
    getAdvancedSyncScheduleFromWarehouseV1(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAdvancedSyncScheduleFromWarehouse200Response;
    }>;
    listSelectiveSyncsFromWarehouseAndSourceAlpha(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSelectiveSyncsFromWarehouseAndSource200Response;
    }>;
    listSelectiveSyncsFromWarehouseAndSourceBeta(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSelectiveSyncsFromWarehouseAndSource200Response;
    }>;
    listSelectiveSyncsFromWarehouseAndSourceCurrent(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSelectiveSyncsFromWarehouseAndSource200Response;
    }>;
    listSelectiveSyncsFromWarehouseAndSourceV1(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSelectiveSyncsFromWarehouseAndSource200Response;
    }>;
    listSyncsFromWarehouseAlpha(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouse200Response;
    }>;
    listSyncsFromWarehouseAndSourceAlpha(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouseAndSource200Response;
    }>;
    listSyncsFromWarehouseAndSourceBeta(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouseAndSource200Response;
    }>;
    listSyncsFromWarehouseAndSourceCurrent(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouseAndSource200Response;
    }>;
    listSyncsFromWarehouseAndSourceV1(warehouseId: string, sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouseAndSource200Response;
    }>;
    listSyncsFromWarehouseBeta(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouse200Response;
    }>;
    listSyncsFromWarehouseCurrent(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouse200Response;
    }>;
    listSyncsFromWarehouseV1(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSyncsFromWarehouse200Response;
    }>;
    replaceAdvancedSyncScheduleForWarehouseAlpha(warehouseId: string, ReplaceAdvancedSyncScheduleForWarehouseV1Input: ReplaceAdvancedSyncScheduleForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceAdvancedSyncScheduleForWarehouse200Response;
    }>;
    replaceAdvancedSyncScheduleForWarehouseBeta(warehouseId: string, ReplaceAdvancedSyncScheduleForWarehouseV1Input: ReplaceAdvancedSyncScheduleForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceAdvancedSyncScheduleForWarehouse200Response;
    }>;
    replaceAdvancedSyncScheduleForWarehouseCurrent(warehouseId: string, ReplaceAdvancedSyncScheduleForWarehouseV1Input: ReplaceAdvancedSyncScheduleForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceAdvancedSyncScheduleForWarehouse200Response;
    }>;
    replaceAdvancedSyncScheduleForWarehouseV1(warehouseId: string, ReplaceAdvancedSyncScheduleForWarehouseV1Input: ReplaceAdvancedSyncScheduleForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceAdvancedSyncScheduleForWarehouse200Response;
    }>;
    updateSelectiveSyncForWarehouseAlpha(warehouseId: string, UpdateSelectiveSyncForWarehouseV1Input: UpdateSelectiveSyncForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectiveSyncForWarehouse200Response;
    }>;
    updateSelectiveSyncForWarehouseBeta(warehouseId: string, UpdateSelectiveSyncForWarehouseV1Input: UpdateSelectiveSyncForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectiveSyncForWarehouse200Response;
    }>;
    updateSelectiveSyncForWarehouseCurrent(warehouseId: string, UpdateSelectiveSyncForWarehouseV1Input: UpdateSelectiveSyncForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectiveSyncForWarehouse200Response;
    }>;
    updateSelectiveSyncForWarehouseV1(warehouseId: string, UpdateSelectiveSyncForWarehouseV1Input: UpdateSelectiveSyncForWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectiveSyncForWarehouse200Response;
    }>;
}
