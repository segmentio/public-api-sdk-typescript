/// <reference types="node" />
import http from 'http';
import { CreateProfilesWarehouse200Response } from '../model/createProfilesWarehouse200Response';
import { CreateProfilesWarehouseAlphaInput } from '../model/createProfilesWarehouseAlphaInput';
import { ListProfilesWarehouseInSpace200Response } from '../model/listProfilesWarehouseInSpace200Response';
import { ListSelectiveSyncsFromWarehouseAndSpace200Response } from '../model/listSelectiveSyncsFromWarehouseAndSpace200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveProfilesWarehouseFromSpace200Response } from '../model/removeProfilesWarehouseFromSpace200Response';
import { UpdateProfilesWarehouseForSpaceWarehouse200Response } from '../model/updateProfilesWarehouseForSpaceWarehouse200Response';
import { UpdateProfilesWarehouseForSpaceWarehouseAlphaInput } from '../model/updateProfilesWarehouseForSpaceWarehouseAlphaInput';
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
    listProfilesWarehouseInSpace(spaceId: string, pagination?: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProfilesWarehouseInSpace200Response;
    }>;
    listSelectiveSyncsFromWarehouseAndSpace(spaceId: string, warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSelectiveSyncsFromWarehouseAndSpace200Response;
    }>;
    removeProfilesWarehouseFromSpace(spaceId: string, warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveProfilesWarehouseFromSpace200Response;
    }>;
    updateProfilesWarehouseForSpaceWarehouse(spaceId: string, warehouseId: string, UpdateProfilesWarehouseForSpaceWarehouseAlphaInput: UpdateProfilesWarehouseForSpaceWarehouseAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateProfilesWarehouseForSpaceWarehouse200Response;
    }>;
}
