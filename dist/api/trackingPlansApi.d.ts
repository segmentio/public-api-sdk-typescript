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
    addSourceToTrackingPlanAlpha(trackingPlanId: string, AddSourceToTrackingPlanV1Input: AddSourceToTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddSourceToTrackingPlan200Response;
    }>;
    addSourceToTrackingPlanBeta(trackingPlanId: string, AddSourceToTrackingPlanV1Input: AddSourceToTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddSourceToTrackingPlan200Response;
    }>;
    addSourceToTrackingPlanCurrent(trackingPlanId: string, AddSourceToTrackingPlanV1Input: AddSourceToTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddSourceToTrackingPlan200Response;
    }>;
    addSourceToTrackingPlanV1(trackingPlanId: string, AddSourceToTrackingPlanV1Input: AddSourceToTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddSourceToTrackingPlan200Response;
    }>;
    createTrackingPlanAlpha(CreateTrackingPlanV1Input: CreateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateTrackingPlan200Response;
    }>;
    createTrackingPlanBeta(CreateTrackingPlanV1Input: CreateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateTrackingPlan200Response;
    }>;
    createTrackingPlanCurrent(CreateTrackingPlanV1Input: CreateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateTrackingPlan200Response;
    }>;
    createTrackingPlanV1(CreateTrackingPlanV1Input: CreateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateTrackingPlan200Response;
    }>;
    deleteTrackingPlanAlpha(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTrackingPlan200Response;
    }>;
    deleteTrackingPlanBeta(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTrackingPlan200Response;
    }>;
    deleteTrackingPlanCurrent(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTrackingPlan200Response;
    }>;
    deleteTrackingPlanV1(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteTrackingPlan200Response;
    }>;
    getTrackingPlanAlpha(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTrackingPlan200Response;
    }>;
    getTrackingPlanBeta(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTrackingPlan200Response;
    }>;
    getTrackingPlanCurrent(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTrackingPlan200Response;
    }>;
    getTrackingPlanV1(trackingPlanId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetTrackingPlan200Response;
    }>;
    listRulesFromTrackingPlanAlpha(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRulesFromTrackingPlan200Response;
    }>;
    listRulesFromTrackingPlanBeta(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRulesFromTrackingPlan200Response;
    }>;
    listRulesFromTrackingPlanCurrent(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRulesFromTrackingPlan200Response;
    }>;
    listRulesFromTrackingPlanV1(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRulesFromTrackingPlan200Response;
    }>;
    listSourcesFromTrackingPlanAlpha(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSourcesFromTrackingPlan200Response;
    }>;
    listSourcesFromTrackingPlanBeta(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSourcesFromTrackingPlan200Response;
    }>;
    listSourcesFromTrackingPlanCurrent(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSourcesFromTrackingPlan200Response;
    }>;
    listSourcesFromTrackingPlanV1(trackingPlanId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSourcesFromTrackingPlan200Response;
    }>;
    listTrackingPlansAlpha(pagination: PaginationInput, type?: 'LIVE' | 'PROPERTY_LIBRARY' | 'RULE_LIBRARY' | 'TEMPLATE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTrackingPlans200Response;
    }>;
    listTrackingPlansBeta(pagination: PaginationInput, type?: 'LIVE' | 'PROPERTY_LIBRARY' | 'RULE_LIBRARY' | 'TEMPLATE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTrackingPlans200Response;
    }>;
    listTrackingPlansCurrent(pagination: PaginationInput, type?: 'LIVE' | 'PROPERTY_LIBRARY' | 'RULE_LIBRARY' | 'TEMPLATE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTrackingPlans200Response;
    }>;
    listTrackingPlansV1(pagination: PaginationInput, type?: 'LIVE' | 'PROPERTY_LIBRARY' | 'RULE_LIBRARY' | 'TEMPLATE', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTrackingPlans200Response;
    }>;
    removeRulesFromTrackingPlanAlpha(trackingPlanId: string, rules: Array<RemoveRuleV1>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveRulesFromTrackingPlan200Response;
    }>;
    removeRulesFromTrackingPlanBeta(trackingPlanId: string, rules: Array<RemoveRuleV1>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveRulesFromTrackingPlan200Response;
    }>;
    removeRulesFromTrackingPlanCurrent(trackingPlanId: string, rules: Array<RemoveRuleV1>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveRulesFromTrackingPlan200Response;
    }>;
    removeRulesFromTrackingPlanV1(trackingPlanId: string, rules: Array<RemoveRuleV1>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveRulesFromTrackingPlan200Response;
    }>;
    removeSourceFromTrackingPlanAlpha(trackingPlanId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceFromTrackingPlan200Response;
    }>;
    removeSourceFromTrackingPlanBeta(trackingPlanId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceFromTrackingPlan200Response;
    }>;
    removeSourceFromTrackingPlanCurrent(trackingPlanId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceFromTrackingPlan200Response;
    }>;
    removeSourceFromTrackingPlanV1(trackingPlanId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceFromTrackingPlan200Response;
    }>;
    replaceRulesInTrackingPlanAlpha(trackingPlanId: string, ReplaceRulesInTrackingPlanV1Input: ReplaceRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceRulesInTrackingPlan200Response;
    }>;
    replaceRulesInTrackingPlanBeta(trackingPlanId: string, ReplaceRulesInTrackingPlanV1Input: ReplaceRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceRulesInTrackingPlan200Response;
    }>;
    replaceRulesInTrackingPlanCurrent(trackingPlanId: string, ReplaceRulesInTrackingPlanV1Input: ReplaceRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceRulesInTrackingPlan200Response;
    }>;
    replaceRulesInTrackingPlanV1(trackingPlanId: string, ReplaceRulesInTrackingPlanV1Input: ReplaceRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReplaceRulesInTrackingPlan200Response;
    }>;
    updateRulesInTrackingPlanAlpha(trackingPlanId: string, UpdateRulesInTrackingPlanV1Input: UpdateRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateRulesInTrackingPlan200Response;
    }>;
    updateRulesInTrackingPlanBeta(trackingPlanId: string, UpdateRulesInTrackingPlanV1Input: UpdateRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateRulesInTrackingPlan200Response;
    }>;
    updateRulesInTrackingPlanCurrent(trackingPlanId: string, UpdateRulesInTrackingPlanV1Input: UpdateRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateRulesInTrackingPlan200Response;
    }>;
    updateRulesInTrackingPlanV1(trackingPlanId: string, UpdateRulesInTrackingPlanV1Input: UpdateRulesInTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateRulesInTrackingPlan200Response;
    }>;
    updateTrackingPlanAlpha(trackingPlanId: string, UpdateTrackingPlanV1Input: UpdateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTrackingPlan200Response;
    }>;
    updateTrackingPlanBeta(trackingPlanId: string, UpdateTrackingPlanV1Input: UpdateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTrackingPlan200Response;
    }>;
    updateTrackingPlanCurrent(trackingPlanId: string, UpdateTrackingPlanV1Input: UpdateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTrackingPlan200Response;
    }>;
    updateTrackingPlanV1(trackingPlanId: string, UpdateTrackingPlanV1Input: UpdateTrackingPlanV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateTrackingPlan200Response;
    }>;
}
