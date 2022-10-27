/// <reference types="node" />
import http from 'http';
import { CreateCloudSourceRegulation200Response } from '../model/createCloudSourceRegulation200Response';
import { CreateCloudSourceRegulationV1Input } from '../model/createCloudSourceRegulationV1Input';
import { CreateSourceRegulation200Response } from '../model/createSourceRegulation200Response';
import { CreateSourceRegulationV1Input } from '../model/createSourceRegulationV1Input';
import { CreateWorkspaceRegulation200Response } from '../model/createWorkspaceRegulation200Response';
import { CreateWorkspaceRegulationV1Input } from '../model/createWorkspaceRegulationV1Input';
import { DeleteRegulation200Response } from '../model/deleteRegulation200Response';
import { GetRegulation200Response } from '../model/getRegulation200Response';
import { ListRegulationsFromSource200Response } from '../model/listRegulationsFromSource200Response';
import { ListSuppressions200Response } from '../model/listSuppressions200Response';
import { ListWorkspaceRegulations200Response } from '../model/listWorkspaceRegulations200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum DeletionAndSuppressionApiApiKeys {
}
export declare class DeletionAndSuppressionApi {
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
    setApiKey(key: DeletionAndSuppressionApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createCloudSourceRegulationAlpha(sourceId: string, CreateCloudSourceRegulationV1Input: CreateCloudSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCloudSourceRegulation200Response;
    }>;
    createCloudSourceRegulationBeta(sourceId: string, CreateCloudSourceRegulationV1Input: CreateCloudSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCloudSourceRegulation200Response;
    }>;
    createCloudSourceRegulationCurrent(sourceId: string, CreateCloudSourceRegulationV1Input: CreateCloudSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCloudSourceRegulation200Response;
    }>;
    createCloudSourceRegulationV1(sourceId: string, CreateCloudSourceRegulationV1Input: CreateCloudSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCloudSourceRegulation200Response;
    }>;
    createSourceRegulationAlpha(sourceId: string, CreateSourceRegulationV1Input: CreateSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSourceRegulation200Response;
    }>;
    createSourceRegulationBeta(sourceId: string, CreateSourceRegulationV1Input: CreateSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSourceRegulation200Response;
    }>;
    createSourceRegulationCurrent(sourceId: string, CreateSourceRegulationV1Input: CreateSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSourceRegulation200Response;
    }>;
    createSourceRegulationV1(sourceId: string, CreateSourceRegulationV1Input: CreateSourceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSourceRegulation200Response;
    }>;
    createWorkspaceRegulationAlpha(CreateWorkspaceRegulationV1Input: CreateWorkspaceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWorkspaceRegulation200Response;
    }>;
    createWorkspaceRegulationBeta(CreateWorkspaceRegulationV1Input: CreateWorkspaceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWorkspaceRegulation200Response;
    }>;
    createWorkspaceRegulationCurrent(CreateWorkspaceRegulationV1Input: CreateWorkspaceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWorkspaceRegulation200Response;
    }>;
    createWorkspaceRegulationV1(CreateWorkspaceRegulationV1Input: CreateWorkspaceRegulationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWorkspaceRegulation200Response;
    }>;
    deleteRegulationAlpha(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteRegulation200Response;
    }>;
    deleteRegulationBeta(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteRegulation200Response;
    }>;
    deleteRegulationCurrent(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteRegulation200Response;
    }>;
    deleteRegulationV1(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteRegulation200Response;
    }>;
    getRegulationAlpha(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetRegulation200Response;
    }>;
    getRegulationBeta(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetRegulation200Response;
    }>;
    getRegulationCurrent(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetRegulation200Response;
    }>;
    getRegulationV1(regulateId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetRegulation200Response;
    }>;
    listRegulationsFromSourceAlpha(sourceId: string, pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRegulationsFromSource200Response;
    }>;
    listRegulationsFromSourceBeta(sourceId: string, pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRegulationsFromSource200Response;
    }>;
    listRegulationsFromSourceCurrent(sourceId: string, pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRegulationsFromSource200Response;
    }>;
    listRegulationsFromSourceV1(sourceId: string, pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRegulationsFromSource200Response;
    }>;
    listSuppressionsAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSuppressions200Response;
    }>;
    listSuppressionsBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSuppressions200Response;
    }>;
    listSuppressionsCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSuppressions200Response;
    }>;
    listSuppressionsV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSuppressions200Response;
    }>;
    listWorkspaceRegulationsAlpha(pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWorkspaceRegulations200Response;
    }>;
    listWorkspaceRegulationsBeta(pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWorkspaceRegulations200Response;
    }>;
    listWorkspaceRegulationsCurrent(pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWorkspaceRegulations200Response;
    }>;
    listWorkspaceRegulationsV1(pagination: PaginationInput, status?: 'FAILED' | 'FINISHED' | 'INITIALIZED' | 'INVALID' | 'NOT_SUPPORTED' | 'PARTIAL_SUCCESS' | 'RUNNING', regulationTypes?: Array<'BULK_DELETE_ONLY' | 'DELETE_INTERNAL' | 'DELETE_ONLY' | 'SUPPRESS_ONLY' | 'SUPPRESS_WITH_DELETE' | 'UNSUPPRESS'>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWorkspaceRegulations200Response;
    }>;
}
