/// <reference types="node" />
export * from './aPICallsApi';
import { APICallsApi } from './aPICallsApi';
export * from './auditTrailApi';
import { AuditTrailApi } from './auditTrailApi';
export * from './catalogApi';
import { CatalogApi } from './catalogApi';
export * from './deletionAndSuppressionApi';
import { DeletionAndSuppressionApi } from './deletionAndSuppressionApi';
export * from './destinationFiltersApi';
import { DestinationFiltersApi } from './destinationFiltersApi';
export * from './destinationsApi';
import { DestinationsApi } from './destinationsApi';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './functionsApi';
import { FunctionsApi } from './functionsApi';
export * from './iAMGroupsApi';
import { IAMGroupsApi } from './iAMGroupsApi';
export * from './iAMRolesApi';
import { IAMRolesApi } from './iAMRolesApi';
export * from './iAMUsersApi';
import { IAMUsersApi } from './iAMUsersApi';
export * from './labelsApi';
import { LabelsApi } from './labelsApi';
export * from './monthlyTrackedUsersApi';
import { MonthlyTrackedUsersApi } from './monthlyTrackedUsersApi';
export * from './selectiveSyncApi';
import { SelectiveSyncApi } from './selectiveSyncApi';
export * from './sourcesApi';
import { SourcesApi } from './sourcesApi';
export * from './testingApi';
import { TestingApi } from './testingApi';
export * from './trackingPlansApi';
import { TrackingPlansApi } from './trackingPlansApi';
export * from './warehousesApi';
import { WarehousesApi } from './warehousesApi';
export * from './workspacesApi';
import { WorkspacesApi } from './workspacesApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof APICallsApi | typeof AuditTrailApi | typeof CatalogApi | typeof DeletionAndSuppressionApi | typeof DestinationFiltersApi | typeof DestinationsApi | typeof EventsApi | typeof FunctionsApi | typeof IAMGroupsApi | typeof IAMRolesApi | typeof IAMUsersApi | typeof LabelsApi | typeof MonthlyTrackedUsersApi | typeof SelectiveSyncApi | typeof SourcesApi | typeof TestingApi | typeof TrackingPlansApi | typeof WarehousesApi | typeof WorkspacesApi)[];
export interface Apis {
    apiCalls: APICallsApi;
    auditTrail: AuditTrailApi;
    catalog: CatalogApi;
    deletionAndSuppresion: DeletionAndSuppressionApi;
    destinationFilters: DestinationFiltersApi;
    destinations: DestinationsApi;
    events: EventsApi;
    functions: FunctionsApi;
    iamGroups: IAMGroupsApi;
    iamRoles: IAMRolesApi;
    iamUsers: IAMUsersApi;
    labels: LabelsApi;
    monthlyTrackedUsers: MonthlyTrackedUsersApi;
    selectiveSync: SelectiveSyncApi;
    sources: SourcesApi;
    testing: TestingApi;
    trackingPlans: TrackingPlansApi;
    warehouses: WarehousesApi;
    workspaces: WorkspacesApi;
}
export declare function configureApis(token: string, headers?: Record<string, string>): Apis;
export declare function unwrap<T>(promise: Promise<{
    body: {
        data?: T;
    };
}>, fallback?: string): Promise<T>;
