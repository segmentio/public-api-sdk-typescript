/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.0.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents a permission\'s resource.
 */
export class ResourceV1 {
    /**
     * The id of this resource.
     */
    'id': string;
    /**
     * The kind of resource this permission applies to.
     */
    'type': ResourceV1.TypeEnum;

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
            type: 'ResourceV1.TypeEnum',
        },
    ];

    static getAttributeTypeMap() {
        return ResourceV1.attributeTypeMap;
    }
}

export namespace ResourceV1 {
    export enum TypeEnum {
        FUNCTION = <any>'FUNCTION',
        SOURCE = <any>'SOURCE',
        SPACE = <any>'SPACE',
        WAREHOUSE = <any>'WAREHOUSE',
        WORKSPACE = <any>'WORKSPACE',
    }
}
