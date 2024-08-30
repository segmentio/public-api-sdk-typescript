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

/**
 * Updates a Profiles Warehouse based on a set of parameters.
 */
export class UpdateProfilesWarehouseForSpaceWarehouseAlphaInput {
    /**
     * An optional human-readable name for this Warehouse.
     */
    'name'?: string;
    /**
     * Enable to allow this Warehouse to receive data. Defaults to true.
     */
    'enabled'?: boolean;
    /**
     * A key-value object that contains instance-specific Warehouse settings.
     */
    'settings': { [key: string]: any };
    /**
     * The custom schema name that Segment uses on the Warehouse side. The space slug value is default otherwise.
     */
    'schemaName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'name',
            baseName: 'name',
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
        {
            name: 'schemaName',
            baseName: 'schemaName',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateProfilesWarehouseForSpaceWarehouseAlphaInput.attributeTypeMap;
    }
}
