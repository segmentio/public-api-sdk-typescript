/// <reference types="node" />
import http from 'http';
import { AddPermissionsToUser200Response } from '../model/addPermissionsToUser200Response';
import { AddPermissionsToUserV1Input } from '../model/addPermissionsToUserV1Input';
import { CreateInvites200Response } from '../model/createInvites200Response';
import { CreateInvitesV1Input } from '../model/createInvitesV1Input';
import { DeleteInvites200Response } from '../model/deleteInvites200Response';
import { DeleteUsers200Response } from '../model/deleteUsers200Response';
import { GetUser200Response } from '../model/getUser200Response';
import { ListInvites200Response } from '../model/listInvites200Response';
import { ListUserGroupsFromUser200Response } from '../model/listUserGroupsFromUser200Response';
import { ListUsers200Response } from '../model/listUsers200Response';
import { PaginationInput } from '../model/paginationInput';
import { ReplacePermissionsForUser200Response } from '../model/replacePermissionsForUser200Response';
import { ReplacePermissionsForUserV1Input } from '../model/replacePermissionsForUserV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum IAMUsersApiApiKeys {
}
export declare class IAMUsersApi {
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
    setApiKey(key: IAMUsersApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addPermissionsToUser(userId: string, AddPermissionsToUserV1Input: AddPermissionsToUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUser200Response;
    }>;
    createInvites(CreateInvitesV1Input: CreateInvitesV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateInvites200Response;
    }>;
    deleteInvites(emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteInvites200Response;
    }>;
    deleteUsers(userIds: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUsers200Response;
    }>;
    getUser(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUser200Response;
    }>;
    listInvites(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvites200Response;
    }>;
    listUserGroupsFromUser(userId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroupsFromUser200Response;
    }>;
    listUsers(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsers200Response;
    }>;
    replacePermissionsForUser(userId: string, ReplacePermissionsForUserV1Input: ReplacePermissionsForUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUser200Response;
    }>;
}
