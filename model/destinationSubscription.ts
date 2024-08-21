/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 53.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class DestinationSubscription {
    /**
     * The unique identifier for the subscription.
     */
    'id': string;
    /**
     * The name of the subscription.
     */
    'name': string;
    /**
     * The unique identifier for the Destination action to trigger.
     */
    'actionId': string;
    /**
     * The URL-friendly key for the associated Destination action.
     */
    'actionSlug': string;
    /**
     * The associated Destination instance id.
     */
    'destinationId': string;
    /**
     * Is the subscription enabled.
     */
    'enabled': boolean;
    /**
     * Represents settings used to configure an action subscription.
     */
    'settings': { [key: string]: any };
    /**
     * FQL string that describes what events should trigger a Destination action.
     */
    'trigger': string;
    /**
     * The unique identifier for the linked ReverseETLModel, if this part of a Reverse ETL connection.
     */
    'modelId'?: string;
    /**
     * The schedule for the Reverse ETL subscription.
     */
    'reverseETLSchedule'?: object | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
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
            name: 'actionSlug',
            baseName: 'actionSlug',
            type: 'string',
        },
        {
            name: 'destinationId',
            baseName: 'destinationId',
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
            name: 'trigger',
            baseName: 'trigger',
            type: 'string',
        },
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
        {
            name: 'reverseETLSchedule',
            baseName: 'reverseETLSchedule',
            type: 'object',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationSubscription.attributeTypeMap;
    }
}
