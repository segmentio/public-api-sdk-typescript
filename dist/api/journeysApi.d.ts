/// <reference types="node" />
import http from 'http';
import { CreateJourney201Response } from '../model/createJourney201Response';
import { CreateJourneyAlphaInput } from '../model/createJourneyAlphaInput';
import { GetJourney200Response } from '../model/getJourney200Response';
import { GetJourneyAnalytics200Response } from '../model/getJourneyAnalytics200Response';
import { RemoveJourneyFromSpace200Response } from '../model/removeJourneyFromSpace200Response';
import { ReplaceStepsForJourney200Response } from '../model/replaceStepsForJourney200Response';
import { ReplaceStepsForJourneyAlphaInput } from '../model/replaceStepsForJourneyAlphaInput';
import { UpdateDestinationsForJourney200Response } from '../model/updateDestinationsForJourney200Response';
import { UpdateDestinationsForJourneyAlphaInput } from '../model/updateDestinationsForJourneyAlphaInput';
import { UpdateStatusForJourney200Response } from '../model/updateStatusForJourney200Response';
import { UpdateStatusForJourneyAlphaInput } from '../model/updateStatusForJourneyAlphaInput';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum JourneysApiApiKeys {
}
export declare class JourneysApi {
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
    setApiKey(key: JourneysApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    createJourney(spaceId: string, CreateJourneyAlphaInput: CreateJourneyAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateJourney201Response;
    }>;
    getJourney(spaceId: string, containerId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetJourney200Response;
    }>;
    getJourneyAnalytics(spaceId: string, containerId: string, version: number, fromDate: string, toDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetJourneyAnalytics200Response;
    }>;
    removeJourneyFromSpace(spaceId: string, containerId: string, version: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveJourneyFromSpace200Response;
    }>;
    replaceStepsForJourney(spaceId: string, containerId: string, ReplaceStepsForJourneyAlphaInput: ReplaceStepsForJourneyAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceStepsForJourney200Response;
    }>;
    updateDestinationsForJourney(spaceId: string, containerId: string, UpdateDestinationsForJourneyAlphaInput: UpdateDestinationsForJourneyAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateDestinationsForJourney200Response;
    }>;
    updateStatusForJourney(spaceId: string, containerId: string, UpdateStatusForJourneyAlphaInput: UpdateStatusForJourneyAlphaInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateStatusForJourney200Response;
    }>;
}
