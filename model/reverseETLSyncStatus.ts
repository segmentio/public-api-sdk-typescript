/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 54.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SyncExtractPhase } from './syncExtractPhase';
import { SyncLoadPhase } from './syncLoadPhase';

/**
 * Defines the result of getting the sync status of a RETL connection.
 */
export class ReverseETLSyncStatus {
    /**
     * The id of the sync.
     */
    'syncId': string;
    /**
     * The Model id of the sync.
     */
    'modelId': string;
    /**
     * The Source id of the sync.
     */
    'sourceId': string;
    /**
     * The status of the sync. It currently can be IN_PROGRESS, FAIL, SUCCESS, PARTIAL_SUCCESS.
     */
    'syncStatus': string;
    /**
     * The duration of the sync.
     */
    'duration': string;
    /**
     * When the sync started.
     */
    'startedAt': string;
    /**
     * When the sync started.
     */
    'finishedAt'?: string;
    'extractPhase'?: SyncExtractPhase;
    'loadPhase'?: SyncLoadPhase;
    /**
     * Error message if applicable.
     */
    'error'?: string;
    /**
     * Error code indicates a fatal sync error code, if applicable.
     */
    'errorCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'syncId',
            baseName: 'syncId',
            type: 'string',
        },
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'syncStatus',
            baseName: 'syncStatus',
            type: 'string',
        },
        {
            name: 'duration',
            baseName: 'duration',
            type: 'string',
        },
        {
            name: 'startedAt',
            baseName: 'startedAt',
            type: 'string',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
        {
            name: 'extractPhase',
            baseName: 'extractPhase',
            type: 'SyncExtractPhase',
        },
        {
            name: 'loadPhase',
            baseName: 'loadPhase',
            type: 'SyncLoadPhase',
        },
        {
            name: 'error',
            baseName: 'error',
            type: 'string',
        },
        {
            name: 'errorCode',
            baseName: 'errorCode',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return ReverseETLSyncStatus.attributeTypeMap;
    }
}