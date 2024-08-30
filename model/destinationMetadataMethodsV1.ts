/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 53.2.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents methods that a given Destination supports.
 */
export class DestinationMetadataMethodsV1 {
    /**
     * Identifies if the Destination supports the `pageview` method.
     */
    'pageview'?: boolean;
    /**
     * Identifies if the Destination supports the `identify` method.
     */
    'identify'?: boolean;
    /**
     * Identifies if the Destination supports the `alias` method.
     */
    'alias'?: boolean;
    /**
     * Identifies if the Destination supports the `track` method.
     */
    'track'?: boolean;
    /**
     * Identifies if the Destination supports the `group` method.
     */
    'group'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'pageview',
            baseName: 'pageview',
            type: 'boolean',
        },
        {
            name: 'identify',
            baseName: 'identify',
            type: 'boolean',
        },
        {
            name: 'alias',
            baseName: 'alias',
            type: 'boolean',
        },
        {
            name: 'track',
            baseName: 'track',
            type: 'boolean',
        },
        {
            name: 'group',
            baseName: 'group',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationMetadataMethodsV1.attributeTypeMap;
    }
}
