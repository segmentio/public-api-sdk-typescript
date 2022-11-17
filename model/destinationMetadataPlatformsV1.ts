/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 32.0.6
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents platforms that a given Destination supports.
 */
export class DestinationMetadataPlatformsV1 {
    /**
     * Whether this Destination supports browser events.
     */
    'browser'?: boolean;
    /**
     * Whether this Destination supports server events.
     */
    'server'?: boolean;
    /**
     * Whether this Destination supports mobile events.
     */
    'mobile'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'browser',
            baseName: 'browser',
            type: 'boolean',
        },
        {
            name: 'server',
            baseName: 'server',
            type: 'boolean',
        },
        {
            name: 'mobile',
            baseName: 'mobile',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationMetadataPlatformsV1.attributeTypeMap;
    }
}
