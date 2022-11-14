/// <reference types="node" />
import http from 'http';
import { CreateDestination200Response } from '../model/createDestination200Response';
import { CreateDestinationSubscription200Response } from '../model/createDestinationSubscription200Response';
import { CreateDestinationSubscriptionAlphaInput } from '../model/createDestinationSubscriptionAlphaInput';
import { CreateDestinationV1Input } from '../model/createDestinationV1Input';
import { DeleteDestination200Response } from '../model/deleteDestination200Response';
import { GetDestination200Response } from '../model/getDestination200Response';
import { GetSubscriptionFromDestination200Response } from '../model/getSubscriptionFromDestination200Response';
import { ListDeliveryMetricsSummaryFromDestination200Response } from '../model/listDeliveryMetricsSummaryFromDestination200Response';
import { ListDestinations200Response } from '../model/listDestinations200Response';
import { ListSubscriptionsFromDestination200Response } from '../model/listSubscriptionsFromDestination200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveSubscriptionFromDestination200Response } from '../model/removeSubscriptionFromDestination200Response';
import { UpdateDestination200Response } from '../model/updateDestination200Response';
import { UpdateDestinationV1Input } from '../model/updateDestinationV1Input';
import { UpdateSubscriptionForDestination200Response } from '../model/updateSubscriptionForDestination200Response';
import { UpdateSubscriptionForDestinationAlphaInput } from '../model/updateSubscriptionForDestinationAlphaInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum DestinationsApiApiKeys {
}
export declare class DestinationsApi {
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
    setApiKey(key: DestinationsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createDestination(CreateDestinationV1Input: CreateDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateDestination200Response;
    }>;
    createDestinationSubscription(destinationId: string, CreateDestinationSubscriptionAlphaInput: CreateDestinationSubscriptionAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateDestinationSubscription200Response;
    }>;
    deleteDestination(destinationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteDestination200Response;
    }>;
    getDestination(destinationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestination200Response;
    }>;
    getSubscriptionFromDestination(destinationId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSubscriptionFromDestination200Response;
    }>;
    listDeliveryMetricsSummaryFromDestination(destinationId: string, sourceId: string, startTime?: string, endTime?: string, granularity?: 'DAY' | 'HOUR' | 'MINUTE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListDeliveryMetricsSummaryFromDestination200Response;
    }>;
    listDestinations(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListDestinations200Response;
    }>;
    listSubscriptionsFromDestination(destinationId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSubscriptionsFromDestination200Response;
    }>;
    removeSubscriptionFromDestination(destinationId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSubscriptionFromDestination200Response;
    }>;
    updateDestination(destinationId: string, UpdateDestinationV1Input: UpdateDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateDestination200Response;
    }>;
    updateSubscriptionForDestination(destinationId: string, id: string, UpdateSubscriptionForDestinationAlphaInput: UpdateSubscriptionForDestinationAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSubscriptionForDestination200Response;
    }>;
}
