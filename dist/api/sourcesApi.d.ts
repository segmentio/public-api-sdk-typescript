/// <reference types="node" />
import http from 'http';
import { AddLabelsToSource200Response } from '../model/addLabelsToSource200Response';
import { AddLabelsToSource200Response1 } from '../model/addLabelsToSource200Response1';
import { AddLabelsToSourceAlphaInput } from '../model/addLabelsToSourceAlphaInput';
import { AddLabelsToSourceV1Input } from '../model/addLabelsToSourceV1Input';
import { CreateSource200Response } from '../model/createSource200Response';
import { CreateSource200Response1 } from '../model/createSource200Response1';
import { CreateSourceAlphaInput } from '../model/createSourceAlphaInput';
import { CreateSourceV1Input } from '../model/createSourceV1Input';
import { DeleteSource200Response } from '../model/deleteSource200Response';
import { DeleteSource200Response1 } from '../model/deleteSource200Response1';
import { GetSource200Response } from '../model/getSource200Response';
import { GetSource200Response1 } from '../model/getSource200Response1';
import { ListConnectedDestinationsFromSource200Response } from '../model/listConnectedDestinationsFromSource200Response';
import { ListConnectedDestinationsFromSource200Response1 } from '../model/listConnectedDestinationsFromSource200Response1';
import { ListConnectedWarehousesFromSource200Response } from '../model/listConnectedWarehousesFromSource200Response';
import { ListConnectedWarehousesFromSource200Response1 } from '../model/listConnectedWarehousesFromSource200Response1';
import { ListSchemaSettingsInSource200Response } from '../model/listSchemaSettingsInSource200Response';
import { ListSources200Response } from '../model/listSources200Response';
import { ListSources200Response1 } from '../model/listSources200Response1';
import { PaginationInput } from '../model/paginationInput';
import { ReplaceLabelsInSource200Response } from '../model/replaceLabelsInSource200Response';
import { ReplaceLabelsInSource200Response1 } from '../model/replaceLabelsInSource200Response1';
import { ReplaceLabelsInSourceAlphaInput } from '../model/replaceLabelsInSourceAlphaInput';
import { ReplaceLabelsInSourceV1Input } from '../model/replaceLabelsInSourceV1Input';
import { UpdateSchemaSettingsInSource200Response } from '../model/updateSchemaSettingsInSource200Response';
import { UpdateSchemaSettingsInSourceV1Input } from '../model/updateSchemaSettingsInSourceV1Input';
import { UpdateSource200Response } from '../model/updateSource200Response';
import { UpdateSource200Response1 } from '../model/updateSource200Response1';
import { UpdateSourceAlphaInput } from '../model/updateSourceAlphaInput';
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
    addLabelsToSourceAlpha(sourceId: string, AddLabelsToSourceAlphaInput: AddLabelsToSourceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddLabelsToSource200Response;
    }>;
    addLabelsToSourceBeta(sourceId: string, AddLabelsToSourceV1Input: AddLabelsToSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddLabelsToSource200Response1;
    }>;
    addLabelsToSourceCurrent(sourceId: string, AddLabelsToSourceV1Input: AddLabelsToSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddLabelsToSource200Response1;
    }>;
    addLabelsToSourceV1(sourceId: string, AddLabelsToSourceV1Input: AddLabelsToSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddLabelsToSource200Response1;
    }>;
    createSourceAlpha(CreateSourceAlphaInput: CreateSourceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSource200Response;
    }>;
    createSourceBeta(CreateSourceV1Input: CreateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSource200Response1;
    }>;
    createSourceCurrent(CreateSourceV1Input: CreateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSource200Response1;
    }>;
    createSourceV1(CreateSourceV1Input: CreateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSource200Response1;
    }>;
    deleteSourceAlpha(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteSource200Response;
    }>;
    deleteSourceBeta(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteSource200Response1;
    }>;
    deleteSourceCurrent(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteSource200Response1;
    }>;
    deleteSourceV1(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteSource200Response1;
    }>;
    getSourceAlpha(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSource200Response;
    }>;
    getSourceBeta(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSource200Response1;
    }>;
    getSourceCurrent(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSource200Response1;
    }>;
    getSourceV1(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSource200Response1;
    }>;
    listConnectedDestinationsFromSourceAlpha(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedDestinationsFromSource200Response;
    }>;
    listConnectedDestinationsFromSourceBeta(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedDestinationsFromSource200Response1;
    }>;
    listConnectedDestinationsFromSourceCurrent(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedDestinationsFromSource200Response1;
    }>;
    listConnectedDestinationsFromSourceV1(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedDestinationsFromSource200Response1;
    }>;
    listConnectedWarehousesFromSourceAlpha(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedWarehousesFromSource200Response;
    }>;
    listConnectedWarehousesFromSourceBeta(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedWarehousesFromSource200Response1;
    }>;
    listConnectedWarehousesFromSourceCurrent(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedWarehousesFromSource200Response1;
    }>;
    listConnectedWarehousesFromSourceV1(sourceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedWarehousesFromSource200Response1;
    }>;
    listSchemaSettingsInSourceAlpha(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSchemaSettingsInSource200Response;
    }>;
    listSchemaSettingsInSourceBeta(sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSchemaSettingsInSource200Response;
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
    listSourcesAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSources200Response;
    }>;
    listSourcesBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSources200Response1;
    }>;
    listSourcesCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSources200Response1;
    }>;
    listSourcesV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSources200Response1;
    }>;
    replaceLabelsInSourceAlpha(sourceId: string, ReplaceLabelsInSourceAlphaInput: ReplaceLabelsInSourceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceLabelsInSource200Response;
    }>;
    replaceLabelsInSourceBeta(sourceId: string, ReplaceLabelsInSourceV1Input: ReplaceLabelsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceLabelsInSource200Response1;
    }>;
    replaceLabelsInSourceCurrent(sourceId: string, ReplaceLabelsInSourceV1Input: ReplaceLabelsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceLabelsInSource200Response1;
    }>;
    replaceLabelsInSourceV1(sourceId: string, ReplaceLabelsInSourceV1Input: ReplaceLabelsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceLabelsInSource200Response1;
    }>;
    updateSchemaSettingsInSourceAlpha(sourceId: string, UpdateSchemaSettingsInSourceV1Input: UpdateSchemaSettingsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSchemaSettingsInSource200Response;
    }>;
    updateSchemaSettingsInSourceBeta(sourceId: string, UpdateSchemaSettingsInSourceV1Input: UpdateSchemaSettingsInSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSchemaSettingsInSource200Response;
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
    updateSourceAlpha(sourceId: string, UpdateSourceAlphaInput: UpdateSourceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSource200Response;
    }>;
    updateSourceBeta(sourceId: string, UpdateSourceV1Input: UpdateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSource200Response1;
    }>;
    updateSourceCurrent(sourceId: string, UpdateSourceV1Input: UpdateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSource200Response1;
    }>;
    updateSourceV1(sourceId: string, UpdateSourceV1Input: UpdateSourceV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSource200Response1;
    }>;
}
