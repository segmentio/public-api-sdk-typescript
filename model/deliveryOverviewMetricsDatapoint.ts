/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.0.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Series within DeliveryOverviewMetricsDataset.
 */
export class DeliveryOverviewMetricsDatapoint {
    /**
     * The timestamp corresponding to the beginning of the window given by the requested granularity.
     */
    'time': string;
    /**
     * Holds the number of events within the specified granularity and group By options.
     */
    'count': number;
    /**
     * The number of retried events that were successfully delivered.
     */
    'retryCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'time',
            baseName: 'time',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
        {
            name: 'retryCount',
            baseName: 'retryCount',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return DeliveryOverviewMetricsDatapoint.attributeTypeMap;
    }
}
