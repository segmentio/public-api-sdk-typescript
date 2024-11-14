/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.0.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * A snapshot of MTU metrics within the given usage period.
 */
export class MtuSnapshotV1 {
    /**
     * The start of the usage period, in unix time (seconds since epoch).
     */
    'periodStart': number;
    /**
     * The end of the usage period, in unix time (seconds since epoch).
     */
    'periodEnd': number;
    /**
     * A bigint of the number of anonymous users in this snapshot.
     */
    'anonymous': string;
    /**
     * A bigint of the number of anonymous identified users in this snapshot.
     */
    'anonymousIdentified': string;
    /**
     * A bigint of the number of identified users in this snapshot.
     */
    'identified': string;
    /**
     * A bigint of the number of never identified users in this snapshot.
     */
    'neverIdentified': string;
    /**
     * The timestamp of this snapshot within the billing cycle, in the ISO-8601 format.
     */
    'timestamp': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'periodStart',
            baseName: 'periodStart',
            type: 'number',
        },
        {
            name: 'periodEnd',
            baseName: 'periodEnd',
            type: 'number',
        },
        {
            name: 'anonymous',
            baseName: 'anonymous',
            type: 'string',
        },
        {
            name: 'anonymousIdentified',
            baseName: 'anonymousIdentified',
            type: 'string',
        },
        {
            name: 'identified',
            baseName: 'identified',
            type: 'string',
        },
        {
            name: 'neverIdentified',
            baseName: 'neverIdentified',
            type: 'string',
        },
        {
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return MtuSnapshotV1.attributeTypeMap;
    }
}
