/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.3.4
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Metadata1 } from './metadata1';

/**
 * Defines a data Warehouse used as a Destination for Segment data.
 */
export class WarehouseV1 {
    /**
     * The id of the Warehouse.
     */
    'id': string;
    'metadata': Metadata1;
    /**
     * The id of the Workspace that owns this Warehouse.
     */
    'workspaceId': string;
    /**
     * When set to true, this Warehouse receives data.
     */
    'enabled': boolean;
    /**
     * The settings associated with this Warehouse.  Common settings are connection-related configuration used to connect to it, for example host, username, and port.
     */
    'settings': any | null;

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
            type: 'Metadata1',
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
            type: 'any',
        },
    ];

    static getAttributeTypeMap() {
        return WarehouseV1.attributeTypeMap;
    }
}
