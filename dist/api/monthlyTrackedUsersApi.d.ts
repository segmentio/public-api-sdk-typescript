/// <reference types="node" />
import http from 'http';
import { GetDailyPerSourceMTUUsage200Response } from '../model/getDailyPerSourceMTUUsage200Response';
import { GetDailyWorkspaceMTUUsage200Response } from '../model/getDailyWorkspaceMTUUsage200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum MonthlyTrackedUsersApiApiKeys {
}
export declare class MonthlyTrackedUsersApi {
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
    setApiKey(key: MonthlyTrackedUsersApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    getDailyPerSourceMTUUsageAlpha(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyPerSourceMTUUsage200Response;
    }>;
    getDailyPerSourceMTUUsageBeta(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyPerSourceMTUUsage200Response;
    }>;
    getDailyPerSourceMTUUsageCurrent(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyPerSourceMTUUsage200Response;
    }>;
    getDailyPerSourceMTUUsageV1(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyPerSourceMTUUsage200Response;
    }>;
    getDailyWorkspaceMTUUsageAlpha(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyWorkspaceMTUUsage200Response;
    }>;
    getDailyWorkspaceMTUUsageBeta(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyWorkspaceMTUUsage200Response;
    }>;
    getDailyWorkspaceMTUUsageCurrent(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyWorkspaceMTUUsage200Response;
    }>;
    getDailyWorkspaceMTUUsageV1(period: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDailyWorkspaceMTUUsage200Response;
    }>;
}
