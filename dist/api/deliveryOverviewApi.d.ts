/// <reference types="node" />
import http from 'http';
import { DeliveryOverviewFilterBy } from '../model/deliveryOverviewFilterBy';
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
    getEgressFailedMetricsFromDeliveryOverview(sourceId: string, startTime: string, endTime: string, granularity: 'day' | 'hour' | 'minute', destinationConfigId?: string, groupBy?: Array<string>, filter?: DeliveryOverviewFilterBy, pagination?: PaginationInput, subscriptionId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getEgressSuccessMetricsFromDeliveryOverview(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getFilteredAtDestinationMetricsFromDeliveryOverview(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getFilteredAtSourceMetricsFromDeliveryOverview(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getIngressFailedMetricsFromDeliveryOverview(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getIngressSuccessMetricsFromDeliveryOverview(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
}
