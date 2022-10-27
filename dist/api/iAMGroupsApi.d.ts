/// <reference types="node" />
import http from 'http';
import { AddPermissionsToUserGroup200Response } from '../model/addPermissionsToUserGroup200Response';
import { AddPermissionsToUserGroupV1Input } from '../model/addPermissionsToUserGroupV1Input';
import { AddUsersToUserGroup200Response } from '../model/addUsersToUserGroup200Response';
import { AddUsersToUserGroupV1Input } from '../model/addUsersToUserGroupV1Input';
import { CreateUserGroup200Response } from '../model/createUserGroup200Response';
import { CreateUserGroupV1Input } from '../model/createUserGroupV1Input';
import { DeleteUserGroup200Response } from '../model/deleteUserGroup200Response';
import { GetUserGroup200Response } from '../model/getUserGroup200Response';
import { ListInvitesFromUserGroup200Response } from '../model/listInvitesFromUserGroup200Response';
import { ListUserGroups200Response } from '../model/listUserGroups200Response';
import { ListUsersFromUserGroup200Response } from '../model/listUsersFromUserGroup200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveUsersFromUserGroup200Response } from '../model/removeUsersFromUserGroup200Response';
import { ReplacePermissionsForUserGroup200Response } from '../model/replacePermissionsForUserGroup200Response';
import { ReplacePermissionsForUserGroupV1Input } from '../model/replacePermissionsForUserGroupV1Input';
import { ReplaceUsersInUserGroup200Response } from '../model/replaceUsersInUserGroup200Response';
import { ReplaceUsersInUserGroupV1Input } from '../model/replaceUsersInUserGroupV1Input';
import { UpdateUserGroup200Response } from '../model/updateUserGroup200Response';
import { UpdateUserGroupV1Input } from '../model/updateUserGroupV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum IAMGroupsApiApiKeys {
}
export declare class IAMGroupsApi {
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
    setApiKey(key: IAMGroupsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addPermissionsToUserGroupAlpha(userGroupId: string, AddPermissionsToUserGroupV1Input: AddPermissionsToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUserGroup200Response;
    }>;
    addPermissionsToUserGroupBeta(userGroupId: string, AddPermissionsToUserGroupV1Input: AddPermissionsToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUserGroup200Response;
    }>;
    addPermissionsToUserGroupCurrent(userGroupId: string, AddPermissionsToUserGroupV1Input: AddPermissionsToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUserGroup200Response;
    }>;
    addPermissionsToUserGroupV1(userGroupId: string, AddPermissionsToUserGroupV1Input: AddPermissionsToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPermissionsToUserGroup200Response;
    }>;
    addUsersToUserGroupAlpha(userGroupId: string, AddUsersToUserGroupV1Input: AddUsersToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddUsersToUserGroup200Response;
    }>;
    addUsersToUserGroupBeta(userGroupId: string, AddUsersToUserGroupV1Input: AddUsersToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddUsersToUserGroup200Response;
    }>;
    addUsersToUserGroupCurrent(userGroupId: string, AddUsersToUserGroupV1Input: AddUsersToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddUsersToUserGroup200Response;
    }>;
    addUsersToUserGroupV1(userGroupId: string, AddUsersToUserGroupV1Input: AddUsersToUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddUsersToUserGroup200Response;
    }>;
    createUserGroupAlpha(CreateUserGroupV1Input: CreateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateUserGroup200Response;
    }>;
    createUserGroupBeta(CreateUserGroupV1Input: CreateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateUserGroup200Response;
    }>;
    createUserGroupCurrent(CreateUserGroupV1Input: CreateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateUserGroup200Response;
    }>;
    createUserGroupV1(CreateUserGroupV1Input: CreateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateUserGroup200Response;
    }>;
    deleteUserGroupAlpha(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUserGroup200Response;
    }>;
    deleteUserGroupBeta(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUserGroup200Response;
    }>;
    deleteUserGroupCurrent(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUserGroup200Response;
    }>;
    deleteUserGroupV1(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteUserGroup200Response;
    }>;
    getUserGroupAlpha(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUserGroup200Response;
    }>;
    getUserGroupBeta(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUserGroup200Response;
    }>;
    getUserGroupCurrent(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUserGroup200Response;
    }>;
    getUserGroupV1(userGroupId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUserGroup200Response;
    }>;
    listInvitesFromUserGroupAlpha(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvitesFromUserGroup200Response;
    }>;
    listInvitesFromUserGroupBeta(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvitesFromUserGroup200Response;
    }>;
    listInvitesFromUserGroupCurrent(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvitesFromUserGroup200Response;
    }>;
    listInvitesFromUserGroupV1(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvitesFromUserGroup200Response;
    }>;
    listUserGroupsAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroups200Response;
    }>;
    listUserGroupsBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroups200Response;
    }>;
    listUserGroupsCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroups200Response;
    }>;
    listUserGroupsV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserGroups200Response;
    }>;
    listUsersFromUserGroupAlpha(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsersFromUserGroup200Response;
    }>;
    listUsersFromUserGroupBeta(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsersFromUserGroup200Response;
    }>;
    listUsersFromUserGroupCurrent(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsersFromUserGroup200Response;
    }>;
    listUsersFromUserGroupV1(userGroupId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsersFromUserGroup200Response;
    }>;
    removeUsersFromUserGroupAlpha(userGroupId: string, emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveUsersFromUserGroup200Response;
    }>;
    removeUsersFromUserGroupBeta(userGroupId: string, emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveUsersFromUserGroup200Response;
    }>;
    removeUsersFromUserGroupCurrent(userGroupId: string, emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveUsersFromUserGroup200Response;
    }>;
    removeUsersFromUserGroupV1(userGroupId: string, emails: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveUsersFromUserGroup200Response;
    }>;
    replacePermissionsForUserGroupAlpha(userGroupId: string, ReplacePermissionsForUserGroupV1Input: ReplacePermissionsForUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUserGroup200Response;
    }>;
    replacePermissionsForUserGroupBeta(userGroupId: string, ReplacePermissionsForUserGroupV1Input: ReplacePermissionsForUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUserGroup200Response;
    }>;
    replacePermissionsForUserGroupCurrent(userGroupId: string, ReplacePermissionsForUserGroupV1Input: ReplacePermissionsForUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUserGroup200Response;
    }>;
    replacePermissionsForUserGroupV1(userGroupId: string, ReplacePermissionsForUserGroupV1Input: ReplacePermissionsForUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplacePermissionsForUserGroup200Response;
    }>;
    replaceUsersInUserGroupAlpha(userGroupId: string, ReplaceUsersInUserGroupV1Input: ReplaceUsersInUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceUsersInUserGroup200Response;
    }>;
    replaceUsersInUserGroupBeta(userGroupId: string, ReplaceUsersInUserGroupV1Input: ReplaceUsersInUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceUsersInUserGroup200Response;
    }>;
    replaceUsersInUserGroupCurrent(userGroupId: string, ReplaceUsersInUserGroupV1Input: ReplaceUsersInUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceUsersInUserGroup200Response;
    }>;
    replaceUsersInUserGroupV1(userGroupId: string, ReplaceUsersInUserGroupV1Input: ReplaceUsersInUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceUsersInUserGroup200Response;
    }>;
    updateUserGroupAlpha(userGroupId: string, UpdateUserGroupV1Input: UpdateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateUserGroup200Response;
    }>;
    updateUserGroupBeta(userGroupId: string, UpdateUserGroupV1Input: UpdateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateUserGroup200Response;
    }>;
    updateUserGroupCurrent(userGroupId: string, UpdateUserGroupV1Input: UpdateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateUserGroup200Response;
    }>;
    updateUserGroupV1(userGroupId: string, UpdateUserGroupV1Input: UpdateUserGroupV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateUserGroup200Response;
    }>;
}
