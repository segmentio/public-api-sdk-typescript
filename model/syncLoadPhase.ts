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
 * Object representing the load phase + details.
 */
export class SyncLoadPhase {
    /**
     * Counts the subset of records successfully delivered to the downstream Destination.
     */
    'deliverSuccessCount': string;
    /**
     * Counts the subset of records status that failed to be delivered by either receiving a permanent error (for example, 400 Bad Request) or by exhausting all retries for temporary errors (for example, 429 Too Many Requests).
     */
    'deliverFailureCount': string;
    /**
     * Error code indicates a fatal sync error code, if applicable.
     */
    'errorCode': string;
    /**
     * Time that the load phase started.
     */
    'startedAt': string;
    /**
     * Time that the load phase finished.
     */
    'finishedAt': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'deliverSuccessCount',
            baseName: 'deliverSuccessCount',
            type: 'string',
        },
        {
            name: 'deliverFailureCount',
            baseName: 'deliverFailureCount',
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
        return SyncLoadPhase.attributeTypeMap;
    }
}
