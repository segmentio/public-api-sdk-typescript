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

export class HttpError extends Error {
    constructor(
        public response: http.IncomingMessage,
        public body: any,
        public statusCode?: number
    ) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [
    APICallsApi,
    AuditTrailApi,
    CatalogApi,
    DeletionAndSuppressionApi,
    DestinationFiltersApi,
    DestinationsApi,
    EventsApi,
    FunctionsApi,
    IAMGroupsApi,
    IAMRolesApi,
    IAMUsersApi,
    LabelsApi,
    MonthlyTrackedUsersApi,
    SelectiveSyncApi,
    SourcesApi,
    TestingApi,
    TrackingPlansApi,
    WarehousesApi,
    WorkspacesApi,
];

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

/**
 * Configures all the APIs and consolidates them into a single client.
 *
 * @param token the authorization token
 * @returns The consolidated client
 */
export function configureApis(
    token: string,
    headers: Record<string, string> = {}
): Apis {
    const apis = {
        apiCalls: new APICallsApi(),
        auditTrail: new AuditTrailApi(),
        catalog: new CatalogApi(),
        deletionAndSuppresion: new DeletionAndSuppressionApi(),
        destinationFilters: new DestinationFiltersApi(),
        destinations: new DestinationsApi(),
        events: new EventsApi(),
        functions: new FunctionsApi(),
        iamGroups: new IAMGroupsApi(),
        iamRoles: new IAMRolesApi(),
        iamUsers: new IAMUsersApi(),
        labels: new LabelsApi(),
        monthlyTrackedUsers: new MonthlyTrackedUsersApi(),
        selectiveSync: new SelectiveSyncApi(),
        sources: new SourcesApi(),
        testing: new TestingApi(),
        trackingPlans: new TrackingPlansApi(),
        warehouses: new WarehousesApi(),
        workspaces: new WorkspacesApi(),
    };

    for (const k of Object.keys(apis)) {
        const key = k as keyof typeof apis;
        apis[key].accessToken = token;
        apis[key].defaultHeaders = headers;
    }

    return apis;
}

/**
 * Unwraps the data from a Public API request, and re-throws client errors
 *
 * @param promise An async Public API request
 * @param fallback A fallback string in case data is unavailable
 *
 * @returns the unwrapped data
 */
export async function unwrap<T>(
    promise: Promise<{
        body: { data?: T };
    }>,
    fallback?: string
): Promise<T> {
    const response = await promise.catch((e: HttpError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        throw e.body.errors[0];
    });

    if (response.body === undefined || response.body.data === undefined) {
        throw new Error(fallback ?? 'Could not load data');
    }

    return response.body.data;
}
