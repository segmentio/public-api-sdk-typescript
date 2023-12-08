/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 38.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AdvancedWarehouseSyncScheduleV1Output } from './advancedWarehouseSyncScheduleV1Output';

/**
 * Returns the advanced sync schedule for a Warehouse.
 */
export class GetAdvancedSyncScheduleFromWarehouseV1Output {
    /**
     * Indicates if an advanced sync schedule is enabled for this Warehouse.
     */
    'enabled': boolean;
    'schedule'?: AdvancedWarehouseSyncScheduleV1Output;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'schedule',
            baseName: 'schedule',
            type: 'AdvancedWarehouseSyncScheduleV1Output',
        },
    ];

    static getAttributeTypeMap() {
        return GetAdvancedSyncScheduleFromWarehouseV1Output.attributeTypeMap;
    }
}
