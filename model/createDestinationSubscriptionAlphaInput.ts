/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 47.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * The basic input parameters for creating a Destination subscription.
 */
export class CreateDestinationSubscriptionAlphaInput {
    /**
     * A user-defined name for the subscription.
     */
    'name': string;
    /**
     * The associated action id the subscription should trigger.
     */
    'actionId': string;
    /**
     * The FQL statement.
     */
    'trigger': string;
    /**
     * Is the subscription enabled.
     */
    'enabled': boolean;
    /**
     * Represents settings used to configure an action subscription.
     */
    'settings'?: { [key: string]: any };
    /**
     * When creating a Reverse ETL connection, indicates the Model being used to extract data.
     */
    'modelId'?: string;

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
            name: 'actionId',
            baseName: 'actionId',
            type: 'string',
        },
        {
            name: 'trigger',
            baseName: 'trigger',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return CreateDestinationSubscriptionAlphaInput.attributeTypeMap;
    }
}
