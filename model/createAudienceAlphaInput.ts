/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.0.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AudienceComputationDefinition } from './audienceComputationDefinition';
import { AudienceOptions } from './audienceOptions';

/**
 * Input to create an audience.
 */
export class CreateAudienceAlphaInput {
    /**
     * Name of the audience.
     */
    'name': string;
    /**
     * Determines whether a computation is enabled.
     */
    'enabled'?: boolean;
    /**
     * Description of the audience.
     */
    'description'?: string;
    'definition': AudienceComputationDefinition;
    'options'?: AudienceOptions;

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
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceComputationDefinition',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'AudienceOptions',
        },
    ];

    static getAttributeTypeMap() {
        return CreateAudienceAlphaInput.attributeTypeMap;
    }
}
