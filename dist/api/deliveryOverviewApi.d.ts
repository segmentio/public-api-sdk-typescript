/// <reference types="node" />
import http from 'http';
import { GetDeliveryOverviewDestMetricsBetaInput } from '../model/getDeliveryOverviewDestMetricsBetaInput';
import { GetDeliveryOverviewSourceMetricsBetaInput } from '../model/getDeliveryOverviewSourceMetricsBetaInput';
import { GetEgressFailedMetricsFromDeliveryOverview200Response } from '../model/getEgressFailedMetricsFromDeliveryOverview200Response';
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
    getEgressFailedMetricsFromDeliveryOverview(metrics: GetDeliveryOverviewDestMetricsBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getEgressSuccessMetricsFromDeliveryOverview(metrics: GetDeliveryOverviewDestMetricsBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getFilteredAtDestinationMetricsFromDeliveryOverview(metrics: GetDeliveryOverviewDestMetricsBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getFilteredAtSourceMetricsFromDeliveryOverview(metrics: GetDeliveryOverviewSourceMetricsBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getIngressFailedMetricsFromDeliveryOverview(metrics: GetDeliveryOverviewSourceMetricsBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
    getIngressSuccessMetricsFromDeliveryOverview(metrics: GetDeliveryOverviewSourceMetricsBetaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetEgressFailedMetricsFromDeliveryOverview200Response;
    }>;
}
