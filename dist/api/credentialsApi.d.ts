/// <reference types="node" />
import http from 'http';
import { CreateCredential201Response } from '../model/createCredential201Response';
import { CreateCredentialV1Input } from '../model/createCredentialV1Input';
import { UpdateCredential200Response } from '../model/updateCredential200Response';
import { UpdateCredentialV1Input } from '../model/updateCredentialV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum CredentialsApiApiKeys {
}
export declare class CredentialsApi {
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
    setApiKey(key: CredentialsApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createCredential(CreateCredentialV1Input: CreateCredentialV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCredential201Response;
    }>;
    updateCredential(credentialId: string, UpdateCredentialV1Input: UpdateCredentialV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateCredential200Response;
    }>;
}
