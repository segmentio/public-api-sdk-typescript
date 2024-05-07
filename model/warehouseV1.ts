/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 49.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { WarehouseMetadataV1 } from './warehouseMetadataV1';

/**
 * Defines a data Warehouse used as a Destination for Segment data.
 */
export class WarehouseV1 {
    /**
     * The id of the Warehouse.
     */
    'id': string;
    'metadata': WarehouseMetadataV1;
    /**
     * The id of the Workspace that owns this Warehouse.
     */
    'workspaceId': string;
    /**
     * When set to true, this Warehouse receives data.
     */
    'enabled': boolean;
    /**
     * A key-value object that contains instance-specific Warehouse settings.
     */
    'settings': { [key: string]: any };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'WarehouseMetadataV1',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];

    static getAttributeTypeMap() {
        return WarehouseV1.attributeTypeMap;
    }
}
