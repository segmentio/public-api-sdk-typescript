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
import { PermissionResourceV1 } from './permissionResourceV1';

/**
 * A permission governing access to a resource.
 */
export class AccessPermissionV1 {
    /**
     * The id of the role that applies to this permission.
     */
    'roleId': string;
    /**
     * The name of the role that applies to this permission.
     */
    'roleName': string;
    /**
     * The resources included with this permission.
     */
    'resources': Array<PermissionResourceV1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'roleId',
            baseName: 'roleId',
            type: 'string',
        },
        {
            name: 'roleName',
            baseName: 'roleName',
            type: 'string',
        },
        {
            name: 'resources',
            baseName: 'resources',
            type: 'Array<PermissionResourceV1>',
        },
    ];

    static getAttributeTypeMap() {
        return AccessPermissionV1.attributeTypeMap;
    }
}
