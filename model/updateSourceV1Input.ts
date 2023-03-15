/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.3.2
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Updates an existing Source based on a set of parameters.
 */
export class UpdateSourceV1Input {
    /**
     * An optional human-readable name to associate with the Source.  Config API note: equal to `displayName`.
     */
    'name'?: string;
    /**
     * Enable to allow the Source to send data.
     */
    'enabled'?: boolean;
    /**
     * The slug that identifies the Source.  Config API note: equal to `name`.
     */
    'slug'?: string;
    /**
     * A key-value object that contains instance-specific settings for the Source.  Different kinds of Sources require different kinds of input. The settings input for a Source comes from the `options` object associated with this instance of a Source.  You can find the full list of required settings by accessing the Sources catalog endpoint under `/catalog/sources`.
     */
    'settings'?: any | null;

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
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'any',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateSourceV1Input.attributeTypeMap;
    }
}
