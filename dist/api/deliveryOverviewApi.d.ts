/// <reference types="node" />
import http from 'http';
import { DeliveryOverviewDestinationFilterBy } from '../model/deliveryOverviewDestinationFilterBy';
import { DeliveryOverviewSourceFilterBy } from '../model/deliveryOverviewSourceFilterBy';
import { DeliveryOverviewSuccessfullyReceivedFilterBy } from '../model/deliveryOverviewSuccessfullyReceivedFilterBy';
import { GetEgressFailedMetricsFromDeliveryOverview200Response } from '../model/getEgressFailedMetricsFromDeliveryOverview200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum DeliveryOverviewApiApiKeys {
}
export declare class DeliveryOverviewApi {
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
    setApiKey(key: DeliveryOverviewApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    getEgressFailedMetricsFromDeliveryOverview(sourceId: string, destinationConfigId: string, startTime: string, endTime: string, granularity: 'DAY' | 'HOUR' | 'MINUTE', groupBy?: Array<string>, filter?: DeliveryOverviewDestinationFilterBy, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getEgressSuccessMetricsFromDeliveryOverview(sourceId: string, destinationConfigId: string, startTime: string, endTime: string, granularity: 'DAY' | 'HOUR' | 'MINUTE', groupBy?: Array<string>, filter?: DeliveryOverviewDestinationFilterBy, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getFilteredAtDestinationMetricsFromDeliveryOverview(sourceId: string, destinationConfigId: string, startTime: string, endTime: string, granularity: 'DAY' | 'HOUR' | 'MINUTE', groupBy?: Array<string>, filter?: DeliveryOverviewDestinationFilterBy, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getFilteredAtSourceMetricsFromDeliveryOverview(sourceId: string, startTime: string, endTime: string, granularity: 'DAY' | 'HOUR' | 'MINUTE', groupBy?: Array<string>, filter?: DeliveryOverviewSourceFilterBy, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getIngressFailedMetricsFromDeliveryOverview(sourceId: string, startTime: string, endTime: string, granularity: 'DAY' | 'HOUR' | 'MINUTE', groupBy?: Array<string>, filter?: DeliveryOverviewSourceFilterBy, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getIngressSuccessMetricsFromDeliveryOverview(sourceId: string, startTime: string, endTime: string, granularity: 'DAY' | 'HOUR' | 'MINUTE', groupBy?: Array<string>, filter?: DeliveryOverviewSuccessfullyReceivedFilterBy, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
}
