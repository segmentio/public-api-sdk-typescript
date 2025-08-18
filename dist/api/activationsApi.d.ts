/// <reference types="node" />
import http from 'http';
import { AddActivationToAudience200Response } from '../model/addActivationToAudience200Response';
import { AddActivationToAudienceAlphaInput } from '../model/addActivationToAudienceAlphaInput';
import { AddDestinationToAudience200Response } from '../model/addDestinationToAudience200Response';
import { AddDestinationToAudienceAlphaInput } from '../model/addDestinationToAudienceAlphaInput';
import { GetActivationFromAudience200Response } from '../model/getActivationFromAudience200Response';
import { ListActivationsFromAudience200Response } from '../model/listActivationsFromAudience200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveActivationFromAudience200Response } from '../model/removeActivationFromAudience200Response';
import { UpdateActivationForAudience200Response } from '../model/updateActivationForAudience200Response';
import { UpdateActivationForAudienceAlphaInput } from '../model/updateActivationForAudienceAlphaInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum ActivationsApiApiKeys {
}
export declare class ActivationsApi {
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
    setApiKey(key: ActivationsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addActivationToAudience(spaceId: string, audienceId: string, connectionId: string, AddActivationToAudienceAlphaInput: AddActivationToAudienceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddActivationToAudience200Response;
    }>;
    addDestinationToAudience(spaceId: string, audienceId: string, AddDestinationToAudienceAlphaInput: AddDestinationToAudienceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddDestinationToAudience200Response;
    }>;
    getActivationFromAudience(spaceId: string, audienceId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetActivationFromAudience200Response;
    }>;
    listActivationsFromAudience(spaceId: string, audienceId: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListActivationsFromAudience200Response;
    }>;
    removeActivationFromAudience(spaceId: string, audienceId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveActivationFromAudience200Response;
    }>;
    updateActivationForAudience(spaceId: string, audienceId: string, id: string, UpdateActivationForAudienceAlphaInput: UpdateActivationForAudienceAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateActivationForAudience200Response;
    }>;
}
