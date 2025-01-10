/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DeliveryOverviewMetricsDatapoint } from './deliveryOverviewMetricsDatapoint';

/**
 * Dataset within GetDeliveryOverviewMetricsBetaOutput.
 */
export class DeliveryOverviewMetricsDataset {
    /**
     * The name of the event if group By[] included \'event Name\' in the request.
     */
    'eventName'?: string;
    /**
     * The version of the app if group By[] included \'app Version\' in the request.
     */
    'appVersion'?: string;
    /**
     * The event type if group By[] included \'event Type\' in the request.
     */
    'eventType'?: string;
    /**
     * The discard reason for dropped events if group By[] included \'discard Reason\' in the request.
     */
    'discardReason'?: string;
    /**
     * Holds the count of all event counts over the time frame of the series.
     */
    'total': number;
    /**
     * A list of the event counts broken down by the requested granularity, time frame, and group By options.
     */
    'series': Array<DeliveryOverviewMetricsDatapoint>;
    /**
     * The number of events successfully delivered upon retry.
     */
    'totalRetryCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'string',
        },
        {
            name: 'appVersion',
            baseName: 'appVersion',
            type: 'string',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'string',
        },
        {
            name: 'discardReason',
            baseName: 'discardReason',
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
            type: 'Array<DeliveryOverviewMetricsDatapoint>',
        },
        {
            name: 'totalRetryCount',
            baseName: 'totalRetryCount',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return DeliveryOverviewMetricsDataset.attributeTypeMap;
    }
}
