/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 54.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Create a new Source based on a set of parameters.
 */
export class CreateSourceV1Input {
    /**
     * The slug by which to identify the Source in the Segment app.
     */
    'slug': string;
    /**
     * Enable to allow this Source to send data. Defaults to true.
     */
    'enabled': boolean;
    /**
     * The id of the Source metadata from which this instance of the Source derives.  All Source metadata is available under `/catalog/sources`.
     */
    'metadataId': string;
    /**
     * A key-value object that contains instance-specific settings for a Source.  The `options` field in the Source metadata defines the schema of this object.
     */
    'settings'?: { [key: string]: any };
    /**
     * Whether to disconnect all Warehouses from the Source.
     */
    'disconnectAllWarehouses'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'metadataId',
            baseName: 'metadataId',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'disconnectAllWarehouses',
            baseName: 'disconnectAllWarehouses',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return CreateSourceV1Input.attributeTypeMap;
    }
}
