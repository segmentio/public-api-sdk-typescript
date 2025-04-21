/// <reference types="node" />
import http from 'http';
import { CreateAudience200Response } from '../model/createAudience200Response';
import { CreateAudienceAlphaInput } from '../model/createAudienceAlphaInput';
import { GetAudience200Response } from '../model/getAudience200Response';
import { ListAudienceConsumersFromSpaceAndAudience200Response } from '../model/listAudienceConsumersFromSpaceAndAudience200Response';
import { ListAudienceConsumersSearchInput } from '../model/listAudienceConsumersSearchInput';
import { ListAudienceConsumersSortInput } from '../model/listAudienceConsumersSortInput';
import { ListAudiences200Response } from '../model/listAudiences200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveAudienceFromSpace200Response } from '../model/removeAudienceFromSpace200Response';
import { UpdateAudienceForSpace200Response } from '../model/updateAudienceForSpace200Response';
import { UpdateAudienceForSpaceInput } from '../model/updateAudienceForSpaceInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum AudiencesApiApiKeys {
}
export declare class AudiencesApi {
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
    setApiKey(key: AudiencesApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createAudience(spaceId: string, CreateAudienceAlphaInput: CreateAudienceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateAudience200Response;
    }>;
    getAudience(spaceId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAudience200Response;
    }>;
    listAudienceConsumersFromSpaceAndAudience(spaceId: string, id: string, pagination?: PaginationInput, search?: ListAudienceConsumersSearchInput, sort?: ListAudienceConsumersSortInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAudienceConsumersFromSpaceAndAudience200Response;
    }>;
    listAudiences(spaceId: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAudiences200Response;
    }>;
    removeAudienceFromSpace(spaceId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveAudienceFromSpace200Response;
    }>;
    updateAudienceForSpace(spaceId: string, id: string, UpdateAudienceForSpaceInput: UpdateAudienceForSpaceInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateAudienceForSpace200Response;
    }>;
}
