/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 54.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AllowedLabelBeta } from './allowedLabelBeta';
import { PermissionResourceV1 } from './permissionResourceV1';

/**
 * A registered set of permissions for a subject, extending a role to a resource.
 */
export class PermissionV1 {
    /**
     * The name of the role associated with this permission.
     */
    'roleName': string;
    /**
     * The id of the role associated with this permission.
     */
    'roleId': string;
    /**
     * The resources associated with this permission.
     */
    'resources': Array<PermissionResourceV1>;
    /**
     * The labels to attach to this permission.
     */
    'labels'?: Array<AllowedLabelBeta>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'roleName',
            baseName: 'roleName',
            type: 'string',
        },
        {
            name: 'roleId',
            baseName: 'roleId',
            type: 'string',
        },
        {
            name: 'resources',
            baseName: 'resources',
            type: 'Array<PermissionResourceV1>',
        },
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<AllowedLabelBeta>',
        },
    ];

    static getAttributeTypeMap() {
        return PermissionV1.attributeTypeMap;
    }
}
