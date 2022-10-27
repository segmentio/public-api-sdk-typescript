/// <reference types="node" />
import http from 'http';
import { ListAuditEvents200Response } from '../model/listAuditEvents200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum AuditTrailApiApiKeys {
}
export declare class AuditTrailApi {
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
    setApiKey(key: AuditTrailApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    listAuditEventsAlpha(pagination: PaginationInput, startTime?: string, endTime?: string, resourceId?: string, resourceType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAuditEvents200Response;
    }>;
    listAuditEventsBeta(pagination: PaginationInput, startTime?: string, endTime?: string, resourceId?: string, resourceType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAuditEvents200Response;
    }>;
    listAuditEventsCurrent(pagination: PaginationInput, startTime?: string, endTime?: string, resourceId?: string, resourceType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAuditEvents200Response;
    }>;
    listAuditEventsV1(pagination: PaginationInput, startTime?: string, endTime?: string, resourceId?: string, resourceType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAuditEvents200Response;
    }>;
}
