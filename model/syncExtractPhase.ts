/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 50.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Object representing the extract phase + details.
 */
export class SyncExtractPhase {
    /**
     * Counts the subset of records with status=new, which indicates records that were created/inserted/added.
     */
    'addedCount': string;
    /**
     * Counts the subset of records with status=updated, which indicates records that were modified/updated.
     */
    'updatedCount': string;
    /**
     * Counts the subset of records with status=deleted, which indicates records that were deleted/removed.
     */
    'deletedCount': string;
    /**
     * Counts the total number of records/rows handled by extract, across all statuses.
     */
    'extractCount': string;
    /**
     * Error code indicates a fatal sync error code, if applicable.
     */
    'errorCode': string;
    /**
     * Time that the extract phase started.
     */
    'startedAt': string;
    /**
     * Time that the extract phase finished.
     */
    'finishedAt': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'addedCount',
            baseName: 'addedCount',
            type: 'string',
        },
        {
            name: 'updatedCount',
            baseName: 'updatedCount',
            type: 'string',
        },
        {
            name: 'deletedCount',
            baseName: 'deletedCount',
            type: 'string',
        },
        {
            name: 'extractCount',
            baseName: 'extractCount',
            type: 'string',
        },
        {
            name: 'errorCode',
            baseName: 'errorCode',
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
    ];

    static getAttributeTypeMap() {
        return SyncExtractPhase.attributeTypeMap;
    }
}
