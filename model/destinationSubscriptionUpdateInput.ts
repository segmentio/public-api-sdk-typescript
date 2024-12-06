/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ReverseEtlScheduleDefinition } from './reverseEtlScheduleDefinition';

/**
 * The input parameters for updating a Destination subscription.
 */
export class DestinationSubscriptionUpdateInput {
    /**
     * The user-defined name for the subscription.
     */
    'name'?: string;
    /**
     * The fql statement.
     */
    'trigger'?: string;
    /**
     * Is the subscription enabled.
     */
    'enabled'?: boolean;
    /**
     * Represents settings used to configure an action subscription.
     */
    'settings'?: { [key: string]: any };
    /**
     * (Reverse ETL only) The reverse ETL model to attach this subscription to.
     */
    'reverseETLModelId'?: string;
    'reverseETLSchedule'?: ReverseEtlScheduleDefinition;

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
            name: 'reverseETLModelId',
            baseName: 'reverseETLModelId',
            type: 'string',
        },
        {
            name: 'reverseETLSchedule',
            baseName: 'reverseETLSchedule',
            type: 'ReverseEtlScheduleDefinition',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationSubscriptionUpdateInput.attributeTypeMap;
    }
}
