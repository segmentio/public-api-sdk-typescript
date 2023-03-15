/// <reference types="node" />
import http from 'http';
import { CreateProfilesWarehouse200Response } from '../model/createProfilesWarehouse200Response';
import { CreateProfilesWarehouseAlphaInput } from '../model/createProfilesWarehouseAlphaInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum ProfilesSyncApiApiKeys {
}
export declare class ProfilesSyncApi {
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
    setApiKey(key: ProfilesSyncApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createProfilesWarehouse(spaceId: string, CreateProfilesWarehouseAlphaInput: CreateProfilesWarehouseAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateProfilesWarehouse200Response;
    }>;
}
