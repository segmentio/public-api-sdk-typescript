/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 38.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents a Function in a list.
 */
export class ListFunctionItemV1 {
    /**
     * An identifier for this Function.
     */
    'id'?: string;
    /**
     * The Function type.  Config API note: equal to `type`.
     */
    'resourceType'?: ListFunctionItemV1.ResourceTypeEnum;
    /**
     * The time this Function was created.
     */
    'createdAt'?: string;
    /**
     * The id of the user who created this Function.
     */
    'createdBy'?: string;
    /**
     * A display name for this Function.
     */
    'displayName'?: string;
    /**
     * A description for this Function.
     */
    'description'?: string;
    /**
     * The URL of the logo for this Function.
     */
    'logoUrl'?: string;
    /**
     * The catalog id of this Function.
     */
    'catalogId'?: string;

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
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'ListFunctionItemV1.ResourceTypeEnum',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'displayName',
            baseName: 'displayName',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logoUrl',
            baseName: 'logoUrl',
            type: 'string',
        },
        {
            name: 'catalogId',
            baseName: 'catalogId',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return ListFunctionItemV1.attributeTypeMap;
    }
}

export namespace ListFunctionItemV1 {
    export enum ResourceTypeEnum {
        DESTINATION = <any>'DESTINATION',
        INSERT_DESTINATION = <any>'INSERT_DESTINATION',
        SOURCE = <any>'SOURCE',
    }
}
