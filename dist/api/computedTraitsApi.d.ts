/// <reference types="node" />
import http from 'http';
import { CreateComputedTrait200Response } from '../model/createComputedTrait200Response';
import { CreateTraitAlphaInput } from '../model/createTraitAlphaInput';
import { ListComputedTraits200Response } from '../model/listComputedTraits200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveComputedTraitFromSpace200Response } from '../model/removeComputedTraitFromSpace200Response';
import { UpdateComputedTraitForSpace200Response } from '../model/updateComputedTraitForSpace200Response';
import { UpdateComputedTraitForSpaceAlphaInput } from '../model/updateComputedTraitForSpaceAlphaInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum ComputedTraitsApiApiKeys {
}
export declare class ComputedTraitsApi {
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
    setApiKey(key: ComputedTraitsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createComputedTrait(spaceId: string, CreateTraitAlphaInput: CreateTraitAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateComputedTrait200Response;
    }>;
    getComputedTrait(spaceId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateComputedTrait200Response;
    }>;
    listComputedTraits(spaceId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListComputedTraits200Response;
    }>;
    removeComputedTraitFromSpace(spaceId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveComputedTraitFromSpace200Response;
    }>;
    updateComputedTraitForSpace(spaceId: string, id: string, UpdateComputedTraitForSpaceAlphaInput: UpdateComputedTraitForSpaceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateComputedTraitForSpace200Response;
    }>;
}
