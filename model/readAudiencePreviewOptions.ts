/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.13.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Options which should be applied when segmenting audience previews.
 */
export class ReadAudiencePreviewOptions {
    /**
     * The set of profile external identifiers being used to determine audience preview membership. Profiles will only be considered for audience preview membership if the profile has at least one external id whose key matches a value in this set.
     */
    'filterByExternalIds': Array<string>;
    /**
     * Determines whether data prior to the audience preview being created is included when determining audience preview membership. Note that including historical data may be needed in order to properly handle the definition specified. In these cases, Segment will automatically handle including historical data and the response will return the includeHistoricalData parameter as true.
     */
    'includeHistoricalData': boolean;
    /**
     * If specified, the value of this field indicates the number of days (specified from the date the audience preview was created) that event data will be included from when determining audience preview membership. If unspecified, defer to the value of `includeHistoricalData` to determine whether historical data is either entirely included or entirely excluded when determining audience preview membership.
     */
    'backfillEventDataDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'filterByExternalIds',
            baseName: 'filterByExternalIds',
            type: 'Array<string>',
        },
        {
            name: 'includeHistoricalData',
            baseName: 'includeHistoricalData',
            type: 'boolean',
        },
        {
            name: 'backfillEventDataDays',
            baseName: 'backfillEventDataDays',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return ReadAudiencePreviewOptions.attributeTypeMap;
    }
}
