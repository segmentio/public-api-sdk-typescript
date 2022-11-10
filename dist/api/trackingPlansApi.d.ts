/// <reference types="node" />
import http from 'http';
import { AddSourceToTrackingPlan200Response } from '../model/addSourceToTrackingPlan200Response';
import { AddSourceToTrackingPlanV1Input } from '../model/addSourceToTrackingPlanV1Input';
import { CreateTrackingPlan200Response } from '../model/createTrackingPlan200Response';
import { CreateTrackingPlanV1Input } from '../model/createTrackingPlanV1Input';
import { DeleteTrackingPlan200Response } from '../model/deleteTrackingPlan200Response';
import { GetTrackingPlan200Response } from '../model/getTrackingPlan200Response';
import { ListRulesFromTrackingPlan200Response } from '../model/listRulesFromTrackingPlan200Response';
import { ListSourcesFromTrackingPlan200Response } from '../model/listSourcesFromTrackingPlan200Response';
import { ListTrackingPlans200Response } from '../model/listTrackingPlans200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveRuleV1 } from '../model/removeRuleV1';
import { RemoveRulesFromTrackingPlan200Response } from '../model/removeRulesFromTrackingPlan200Response';
import { RemoveSourceFromTrackingPlan200Response } from '../model/removeSourceFromTrackingPlan200Response';
import { ReplaceRulesInTrackingPlan200Response } from '../model/replaceRulesInTrackingPlan200Response';
import { ReplaceRulesInTrackingPlanV1Input } from '../model/replaceRulesInTrackingPlanV1Input';
import { UpdateRulesInTrackingPlan200Response } from '../model/updateRulesInTrackingPlan200Response';
import { UpdateRulesInTrackingPlanV1Input } from '../model/updateRulesInTrackingPlanV1Input';
import { UpdateTrackingPlan200Response } from '../model/updateTrackingPlan200Response';
import { UpdateTrackingPlanV1Input } from '../model/updateTrackingPlanV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum TrackingPlansApiApiKeys {
}
export declare class TrackingPlansApi {
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
    setApiKey(key: TrackingPlansApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addSourceToTrackingPlan(trackingPlanId: string, AddSourceToTrackingPlanV1Input: AddSourceToTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddSourceToTrackingPlan200Response;
    }>;
    createTrackingPlan(CreateTrackingPlanV1Input: CreateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateTrackingPlan200Response;
    }>;
    deleteTrackingPlan(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTrackingPlan200Response;
    }>;
    getTrackingPlan(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTrackingPlan200Response;
    }>;
    listRulesFromTrackingPlan(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRulesFromTrackingPlan200Response;
    }>;
    listSourcesFromTrackingPlan(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSourcesFromTrackingPlan200Response;
    }>;
    listTrackingPlans(pagination: PaginationInput, type?: 'LIVE' | 'PROPERTY_LIBRARY' | 'RULE_LIBRARY' | 'TEMPLATE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTrackingPlans200Response;
    }>;
    removeRulesFromTrackingPlan(trackingPlanId: string, rules: Array<RemoveRuleV1>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveRulesFromTrackingPlan200Response;
    }>;
    removeSourceFromTrackingPlan(trackingPlanId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceFromTrackingPlan200Response;
    }>;
    replaceRulesInTrackingPlan(trackingPlanId: string, ReplaceRulesInTrackingPlanV1Input: ReplaceRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceRulesInTrackingPlan200Response;
    }>;
    updateRulesInTrackingPlan(trackingPlanId: string, UpdateRulesInTrackingPlanV1Input: UpdateRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateRulesInTrackingPlan200Response;
    }>;
    updateTrackingPlan(trackingPlanId: string, UpdateTrackingPlanV1Input: UpdateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTrackingPlan200Response;
    }>;
}
