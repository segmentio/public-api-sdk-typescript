/// <reference types="node" />
import http from 'http';
import { AddLabelsToSource200Response } from '../model/addLabelsToSource200Response';
import { AddLabelsToSourceV1Input } from '../model/addLabelsToSourceV1Input';
import { CreateSource200Response } from '../model/createSource200Response';
import { CreateSourceV1Input } from '../model/createSourceV1Input';
import { DeleteSource200Response } from '../model/deleteSource200Response';
import { GetSource200Response } from '../model/getSource200Response';
import { ListConnectedDestinationsFromSource200Response } from '../model/listConnectedDestinationsFromSource200Response';
import { ListConnectedWarehousesFromSource200Response } from '../model/listConnectedWarehousesFromSource200Response';
import { ListSchemaSettingsInSource200Response } from '../model/listSchemaSettingsInSource200Response';
import { ListSources200Response } from '../model/listSources200Response';
import { PaginationInput } from '../model/paginationInput';
import { ReplaceLabelsInSource200Response } from '../model/replaceLabelsInSource200Response';
import { ReplaceLabelsInSourceV1Input } from '../model/replaceLabelsInSourceV1Input';
import { UpdateSchemaSettingsInSource200Response } from '../model/updateSchemaSettingsInSource200Response';
import { UpdateSchemaSettingsInSourceV1Input } from '../model/updateSchemaSettingsInSourceV1Input';
import { UpdateSource200Response } from '../model/updateSource200Response';
import { UpdateSourceV1Input } from '../model/updateSourceV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum SourcesApiApiKeys {
}
export declare class SourcesApi {
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
    setApiKey(key: SourcesApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addLabelsToSourceCurrent(sourceId: string, AddLabelsToSourceV1Input: AddLabelsToSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddLabelsToSource200Response;
    }>;
    addLabelsToSourceV1(sourceId: string, AddLabelsToSourceV1Input: AddLabelsToSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddLabelsToSource200Response;
    }>;
    createSourceCurrent(CreateSourceV1Input: CreateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSource200Response;
    }>;
    createSourceV1(CreateSourceV1Input: CreateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSource200Response;
    }>;
    deleteSourceCurrent(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteSource200Response;
    }>;
    deleteSourceV1(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteSource200Response;
    }>;
    getSourceCurrent(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSource200Response;
    }>;
    getSourceV1(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSource200Response;
    }>;
    listConnectedDestinationsFromSourceCurrent(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedDestinationsFromSource200Response;
    }>;
    listConnectedDestinationsFromSourceV1(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedDestinationsFromSource200Response;
    }>;
    listConnectedWarehousesFromSourceCurrent(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedWarehousesFromSource200Response;
    }>;
    listConnectedWarehousesFromSourceV1(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedWarehousesFromSource200Response;
    }>;
    listSchemaSettingsInSourceCurrent(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSchemaSettingsInSource200Response;
    }>;
    listSchemaSettingsInSourceV1(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSchemaSettingsInSource200Response;
    }>;
    listSourcesCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSources200Response;
    }>;
    listSourcesV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSources200Response;
    }>;
    replaceLabelsInSourceCurrent(sourceId: string, ReplaceLabelsInSourceV1Input: ReplaceLabelsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceLabelsInSource200Response;
    }>;
    replaceLabelsInSourceV1(sourceId: string, ReplaceLabelsInSourceV1Input: ReplaceLabelsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceLabelsInSource200Response;
    }>;
    updateSchemaSettingsInSourceCurrent(sourceId: string, UpdateSchemaSettingsInSourceV1Input: UpdateSchemaSettingsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSchemaSettingsInSource200Response;
    }>;
    updateSchemaSettingsInSourceV1(sourceId: string, UpdateSchemaSettingsInSourceV1Input: UpdateSchemaSettingsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSchemaSettingsInSource200Response;
    }>;
    updateSourceCurrent(sourceId: string, UpdateSourceV1Input: UpdateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSource200Response;
    }>;
    updateSourceV1(sourceId: string, UpdateSourceV1Input: UpdateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSource200Response;
    }>;
}
