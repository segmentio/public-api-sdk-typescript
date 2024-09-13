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
 * Input for CreateFilter.
 */
export class CreateFilterInput {
    /**
     * The Integration id of the resource.
     */
    'integrationId': string;
    /**
     * Whether the filter is enabled.
     */
    'enabled'?: boolean;
    /**
     * The name of the filter.
     */
    'name': string;
    /**
     * The description of the filter.
     */
    'description'?: string;
    /**
     * The \"if\" statement for a filter.
     */
    'if': string;
    /**
     * Whether the event is dropped.
     */
    'drop'?: boolean;
    /**
     * Describes the properties to be dropped on events that match the \"if\" statement.
     */
    'dropProperties'?: Array<string>;
    /**
     * Describes the properties allowed on events that match the \"if\" statement.
     */
    'allowProperties'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'integrationId',
            baseName: 'integrationId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'drop',
            baseName: 'drop',
            type: 'boolean',
        },
        {
            name: 'dropProperties',
            baseName: 'dropProperties',
            type: 'Array<string>',
        },
        {
            name: 'allowProperties',
            baseName: 'allowProperties',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return CreateFilterInput.attributeTypeMap;
    }
}
