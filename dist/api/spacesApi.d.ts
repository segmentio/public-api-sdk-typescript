/// <reference types="node" />
import http from 'http';
import { BatchQueryMessagingSubscriptionsForSpace200Response } from '../model/batchQueryMessagingSubscriptionsForSpace200Response';
import { BatchQueryMessagingSubscriptionsForSpaceAlphaInput } from '../model/batchQueryMessagingSubscriptionsForSpaceAlphaInput';
import { GetSpace200Response } from '../model/getSpace200Response';
import { ListSpaces200Response } from '../model/listSpaces200Response';
import { PaginationInput } from '../model/paginationInput';
import { ReplaceMessagingSubscriptionsInSpaces200Response } from '../model/replaceMessagingSubscriptionsInSpaces200Response';
import { ReplaceMessagingSubscriptionsInSpacesAlphaInput } from '../model/replaceMessagingSubscriptionsInSpacesAlphaInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum SpacesApiApiKeys {
}
export declare class SpacesApi {
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
    setApiKey(key: SpacesApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    batchQueryMessagingSubscriptionsForSpace(spaceId: string, BatchQueryMessagingSubscriptionsForSpaceAlphaInput: BatchQueryMessagingSubscriptionsForSpaceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchQueryMessagingSubscriptionsForSpace200Response;
    }>;
    getSpace(spaceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSpace200Response;
    }>;
    listSpaces(pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSpaces200Response;
    }>;
    replaceMessagingSubscriptionsInSpaces(spaceId: string, ReplaceMessagingSubscriptionsInSpacesAlphaInput: ReplaceMessagingSubscriptionsInSpacesAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceMessagingSubscriptionsInSpaces200Response;
    }>;
}
