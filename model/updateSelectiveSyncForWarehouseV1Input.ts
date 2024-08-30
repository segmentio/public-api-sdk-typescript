/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 53.2.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { WarehouseSyncOverrideV1 } from './warehouseSyncOverrideV1';

/**
 * Updates the schema for a Warehouse/sources pair.
 */
export class UpdateSelectiveSyncForWarehouseV1Input {
    /**
     * A list of sync schema overrides to apply to this Warehouse.
     */
    'syncOverrides': Array<WarehouseSyncOverrideV1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'syncOverrides',
            baseName: 'syncOverrides',
            type: 'Array<WarehouseSyncOverrideV1>',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateSelectiveSyncForWarehouseV1Input.attributeTypeMap;
    }
}
