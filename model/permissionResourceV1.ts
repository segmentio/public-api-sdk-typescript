/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 32.0.2
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AllowedLabelBeta } from './allowedLabelBeta';

/**
 * The most basic representation of a resource belonging to a set of permissions.
 */
export class PermissionResourceV1 {
    /**
     * The id of this resource.
     */
    'id': string;
    /**
     * The type for this resource.
     */
    'type': PermissionResourceV1.TypeEnum;
    /**
     * The labels that further refine access to this resource. Labels are exclusive to Workspace-level permissions.
     */
    'labels'?: Array<AllowedLabelBeta>;

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
            name: 'type',
            baseName: 'type',
            type: 'PermissionResourceV1.TypeEnum',
        },
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<AllowedLabelBeta>',
        },
    ];

    static getAttributeTypeMap() {
        return PermissionResourceV1.attributeTypeMap;
    }
}

export namespace PermissionResourceV1 {
    export enum TypeEnum {
        FUNCTION = <any>'FUNCTION',
        SOURCE = <any>'SOURCE',
        SPACE = <any>'SPACE',
        WAREHOUSE = <any>'WAREHOUSE',
        WORKSPACE = <any>'WORKSPACE',
    }
}
