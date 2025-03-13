/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { EventSourceV1 } from './eventSourceV1';
import { SourceEventVolumeDatapointV1 } from './sourceEventVolumeDatapointV1';

/**
 * SourceEventVolume represents a time series of event volume for a Workspace broken down by the dimensions which the customer specifies (optional parameters).
 */
export class SourceEventVolumeV1 {
    'source'?: EventSourceV1;
    /**
     * The name of the event, if applicable.
     */
    'eventName'?: string;
    /**
     * The event type, if applicable.
     */
    'eventType'?: string;
    /**
     * The total count for all events in the requested time frame.
     */
    'total': number;
    /**
     * A list of the event counts broken down by the requested granularity.
     */
    'series': Array<SourceEventVolumeDatapointV1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'source',
            baseName: 'source',
            type: 'EventSourceV1',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'string',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'string',
        },
        {
            name: 'total',
            baseName: 'total',
            type: 'number',
        },
        {
            name: 'series',
            baseName: 'series',
            type: 'Array<SourceEventVolumeDatapointV1>',
        },
    ];

    static getAttributeTypeMap() {
        return SourceEventVolumeV1.attributeTypeMap;
    }
}
