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

/**
 * Describes an Integration option field required to set up a Segment Integration such as Sources, Destinations, or warehouses.
 */
export class IntegrationOptionBeta {
    /**
     * The name identifying this option in the context of a Segment Integration.
     */
    'name': string;
    /**
     * Defines the type for this option in the schema. Types are most commonly strings, but may also represent other primitive types, such as booleans, and numbers, as well as complex types, such as objects and arrays.
     */
    'type': string;
    /**
     * Whether this is a required option when setting up the Integration.
     */
    'required': boolean;
    /**
     * An optional short text description of the field.
     */
    'description'?: string;
    /**
     * An optional default value for the field.
     */
    'defaultValue'?: any | null;
    /**
     * An optional label for this field.
     */
    'label'?: string;

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
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'required',
            baseName: 'required',
            type: 'boolean',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'defaultValue',
            baseName: 'defaultValue',
            type: 'any',
        },
        {
            name: 'label',
            baseName: 'label',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return IntegrationOptionBeta.attributeTypeMap;
    }
}
