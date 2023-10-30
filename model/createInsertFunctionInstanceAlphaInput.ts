/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 36.3.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Creates an insert Function instance.
 */
export class CreateInsertFunctionInstanceAlphaInput {
    /**
     * Insert Function id to which this instance is associated.
     */
    'functionId': string;
    /**
     * The Source or Destination id to be connected.
     */
    'integrationId': string;
    /**
     * Whether this insert Function instance should be enabled for the Destination.
     */
    'enabled'?: boolean;
    /**
     * Defines the display name of the insert Function instance.
     */
    'name': string;
    /**
     * An object that contains settings for this insert Function instance based on the settings present in the insert Function class.
     */
    'settings': { [key: string]: any };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'functionId',
            baseName: 'functionId',
            type: 'string',
        },
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
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
    ];

    static getAttributeTypeMap() {
        return CreateInsertFunctionInstanceAlphaInput.attributeTypeMap;
    }
}
