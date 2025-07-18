/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.13.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Results from updating the schema for a Warehouse/source pair.
 */
export class UpdateSelectiveSyncForWarehouseV1Output {
    /**
     * Status of the update operation.
     */
    'status': UpdateSelectiveSyncForWarehouseV1Output.StatusEnum;
    /**
     * Warnings returned by the operation.
     */
    'warnings': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateSelectiveSyncForWarehouseV1Output.StatusEnum',
        },
        {
            name: 'warnings',
            baseName: 'warnings',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateSelectiveSyncForWarehouseV1Output.attributeTypeMap;
    }
}

export namespace UpdateSelectiveSyncForWarehouseV1Output {
    export enum StatusEnum {
        UNCHANGED = <any>'UNCHANGED',
        UPDATED = <any>'UPDATED',
    }
}
