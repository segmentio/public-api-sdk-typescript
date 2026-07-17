/// <reference types="node" />
import http from 'http';
import { EventPropertyType } from '../model/eventPropertyType';
import { ListEntityPaths200Response } from '../model/listEntityPaths200Response';
import { ListEvents200Response } from '../model/listEvents200Response';
import { ListPropertiesFromEntity200Response } from '../model/listPropertiesFromEntity200Response';
import { ListPropertiesFromEvent200Response } from '../model/listPropertiesFromEvent200Response';
import { ListSampleValuesFromEntityProperty200Response } from '../model/listSampleValuesFromEntityProperty200Response';
import { ListSampleValuesFromEventProperty200Response } from '../model/listSampleValuesFromEventProperty200Response';
import { ListSampleValuesFromTrait200Response } from '../model/listSampleValuesFromTrait200Response';
import { ListTraits200Response } from '../model/listTraits200Response';
import { PaginationInput } from '../model/paginationInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum SpaceSchemaApiApiKeys {
}
export declare class SpaceSchemaApi {
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
    setApiKey(key: SpaceSchemaApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    listEntityPaths(spaceId: string, pagination?: PaginationInput, search?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListEntityPaths200Response;
    }>;
    listEvents(spaceId: string, pagination?: PaginationInput, sortBy?: 'lastSeenAt' | 'name', sortDir?: 'asc' | 'desc', search?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListEvents200Response;
    }>;
    listPropertiesFromEntity(spaceId: string, entitySlug: string, pagination?: PaginationInput, includeSampleValues?: boolean, samplesCount?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPropertiesFromEntity200Response;
    }>;
    listPropertiesFromEvent(spaceId: string, eventName: string, pagination?: PaginationInput, sortBy?: 'lastSeenAt' | 'name', sortDir?: 'asc' | 'desc', search?: string, includeSampleValues?: boolean, samplesCount?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPropertiesFromEvent200Response;
    }>;
    listSampleValuesFromEntityProperty(spaceId: string, entitySlug: string, propertyName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSampleValuesFromEntityProperty200Response;
    }>;
    listSampleValuesFromEventProperty(spaceId: string, eventName: string, propertyName: string, propertyType: EventPropertyType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSampleValuesFromEventProperty200Response;
    }>;
    listSampleValuesFromTrait(spaceId: string, traitKey: string, collection?: 'accounts' | 'users', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSampleValuesFromTrait200Response;
    }>;
    listTraits(spaceId: string, pagination?: PaginationInput, sortBy?: 'lastSeenAt' | 'trait', sortDir?: 'asc' | 'desc', search?: string, collection?: 'accounts' | 'users', includeSampleValues?: boolean, samplesCount?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTraits200Response;
    }>;
}
