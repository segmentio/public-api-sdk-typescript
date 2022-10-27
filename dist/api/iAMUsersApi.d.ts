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
    addPermissionsToUserAlpha(userId: string, AddPermissionsToUserV1Input: AddPermissionsToUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUser200Response;
    }>;
    addPermissionsToUserBeta(userId: string, AddPermissionsToUserV1Input: AddPermissionsToUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUser200Response;
    }>;
    addPermissionsToUserCurrent(userId: string, AddPermissionsToUserV1Input: AddPermissionsToUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUser200Response;
    }>;
    addPermissionsToUserV1(userId: string, AddPermissionsToUserV1Input: AddPermissionsToUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUser200Response;
    }>;
    createInvitesAlpha(CreateInvitesV1Input: CreateInvitesV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateInvites200Response;
    }>;
    createInvitesBeta(CreateInvitesV1Input: CreateInvitesV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateInvites200Response;
    }>;
    createInvitesCurrent(CreateInvitesV1Input: CreateInvitesV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateInvites200Response;
    }>;
    createInvitesV1(CreateInvitesV1Input: CreateInvitesV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateInvites200Response;
    }>;
    deleteInvitesAlpha(emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteInvites200Response;
    }>;
    deleteInvitesBeta(emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteInvites200Response;
    }>;
    deleteInvitesCurrent(emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteInvites200Response;
    }>;
    deleteInvitesV1(emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteInvites200Response;
    }>;
    deleteUsersAlpha(userIds: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUsers200Response;
    }>;
    deleteUsersBeta(userIds: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUsers200Response;
    }>;
    deleteUsersCurrent(userIds: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUsers200Response;
    }>;
    deleteUsersV1(userIds: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUsers200Response;
    }>;
    getUserAlpha(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUser200Response;
    }>;
    getUserBeta(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUser200Response;
    }>;
    getUserCurrent(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUser200Response;
    }>;
    getUserV1(userId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUser200Response;
    }>;
    listInvitesAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvites200Response;
    }>;
    listInvitesBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvites200Response;
    }>;
    listInvitesCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvites200Response;
    }>;
    listInvitesV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvites200Response;
    }>;
    listUserGroupsFromUserAlpha(userId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroupsFromUser200Response;
    }>;
    listUserGroupsFromUserBeta(userId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroupsFromUser200Response;
    }>;
    listUserGroupsFromUserCurrent(userId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroupsFromUser200Response;
    }>;
    listUserGroupsFromUserV1(userId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroupsFromUser200Response;
    }>;
    listUsersAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsers200Response;
    }>;
    listUsersBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsers200Response;
    }>;
    listUsersCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsers200Response;
    }>;
    listUsersV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsers200Response;
    }>;
    replacePermissionsForUserAlpha(userId: string, ReplacePermissionsForUserV1Input: ReplacePermissionsForUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUser200Response;
    }>;
    replacePermissionsForUserBeta(userId: string, ReplacePermissionsForUserV1Input: ReplacePermissionsForUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUser200Response;
    }>;
    replacePermissionsForUserCurrent(userId: string, ReplacePermissionsForUserV1Input: ReplacePermissionsForUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUser200Response;
    }>;
    replacePermissionsForUserV1(userId: string, ReplacePermissionsForUserV1Input: ReplacePermissionsForUserV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUser200Response;
    }>;
}
