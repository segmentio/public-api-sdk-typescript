/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 55.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Determines the time of day at which a Warehouse should sync.
 */
export class WarehouseAdvancedSyncV1 {
    /**
     * The hour of day for which to enable/disable a sync, between 0 and 23.
     */
    'hourOfDay': number;
    /**
     * Enable to the sync at the specified hour.
     */
    'enabled': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'hourOfDay',
            baseName: 'hourOfDay',
            type: 'number',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return WarehouseAdvancedSyncV1.attributeTypeMap;
    }
}
