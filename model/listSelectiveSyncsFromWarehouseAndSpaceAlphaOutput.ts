/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 54.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PaginationOutput } from './paginationOutput';
import { SpaceWarehouseSelectiveSyncItemAlpha } from './spaceWarehouseSelectiveSyncItemAlpha';

/**
 * Results containing the Selective Sync configuration for a Space Warehouse Connection.
 */
export class ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput {
    /**
     * Represents a list of collections and properties synced to the Warehouse.
     */
    'items': Array<SpaceWarehouseSelectiveSyncItemAlpha>;
    /**
     * Optional. Represents the enabled state of all event tables.
     */
    'enableEventTables'?: boolean;
    'pagination': PaginationOutput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'items',
            baseName: 'items',
            type: 'Array<SpaceWarehouseSelectiveSyncItemAlpha>',
        },
        {
            name: 'enableEventTables',
            baseName: 'enableEventTables',
            type: 'boolean',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];

    static getAttributeTypeMap() {
        return ListSelectiveSyncsFromWarehouseAndSpaceAlphaOutput.attributeTypeMap;
    }
}
