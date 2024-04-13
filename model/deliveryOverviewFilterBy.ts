/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 48.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * The `DeliveryOverviewFilterBy` object is a map of the filterable fields and their values.
 */
export class DeliveryOverviewFilterBy {
    /**
     * A list of strings of discard reasons. Can be used to filter all Source and Destination steps, except for Successfully Received.  See [Discard Record Documentation](https://segment.com/docs/connections/delivery-overview/#troubleshooting) for valid error codes.
     */
    'discardReason'?: Array<string>;
    /**
     * A list of strings of event names.
     */
    'eventName'?: Array<string>;
    /**
     * A list of strings of event types. Valid options are: `alias`, `group`, `identify`, `page`, `screen`, and `track`.
     */
    'eventType'?: Array<string>;
    /**
     * A list of strings of app versions.
     */
    'appVersion'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'discardReason',
            baseName: 'discardReason',
            type: 'Array<string>',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'Array<string>',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'Array<string>',
        },
        {
            name: 'appVersion',
            baseName: 'appVersion',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return DeliveryOverviewFilterBy.attributeTypeMap;
    }
}
