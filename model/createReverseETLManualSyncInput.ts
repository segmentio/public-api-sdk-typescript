/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 39.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Defines the parameters needed to trigger a manual sync for a RETL connection.
 */
export class CreateReverseETLManualSyncInput {
    /**
     * The id of the Source.
     */
    'sourceId': string;
    /**
     * The id of the Model.
     */
    'modelId': string;
    /**
     * The id of the Subscription.
     */
    'subscriptionId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
        {
            name: 'subscriptionId',
            baseName: 'subscriptionId',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return CreateReverseETLManualSyncInput.attributeTypeMap;
    }
}
