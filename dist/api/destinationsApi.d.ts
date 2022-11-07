/// <reference types="node" />
import http from 'http';
import { CreateDestination200Response } from '../model/createDestination200Response';
import { CreateDestinationV1Input } from '../model/createDestinationV1Input';
import { DeleteDestination200Response } from '../model/deleteDestination200Response';
import { GetDestination200Response } from '../model/getDestination200Response';
import { ListDestinations200Response } from '../model/listDestinations200Response';
import { PaginationInput } from '../model/paginationInput';
import { UpdateDestination200Response } from '../model/updateDestination200Response';
import { UpdateDestinationV1Input } from '../model/updateDestinationV1Input';
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
    createDestinationCurrent(CreateDestinationV1Input: CreateDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateDestination200Response;
    }>;
    createDestinationV1(CreateDestinationV1Input: CreateDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateDestination200Response;
    }>;
    deleteDestinationCurrent(destinationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteDestination200Response;
    }>;
    deleteDestinationV1(destinationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteDestination200Response;
    }>;
    getDestinationCurrent(destinationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestination200Response;
    }>;
    getDestinationV1(destinationId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDestination200Response;
    }>;
    listDestinationsCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListDestinations200Response;
    }>;
    listDestinationsV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListDestinations200Response;
    }>;
    updateDestinationCurrent(destinationId: string, UpdateDestinationV1Input: UpdateDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateDestination200Response;
    }>;
    updateDestinationV1(destinationId: string, UpdateDestinationV1Input: UpdateDestinationV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateDestination200Response;
    }>;
}
