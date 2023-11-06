/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 37.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GetEventsVolumeFromWorkspaceV1Query } from './getEventsVolumeFromWorkspaceV1Query';
import { PaginationOutput } from './paginationOutput';
import { SourceEventVolumeV1 } from './sourceEventVolumeV1';

/**
 * GetEventsVolumeFromWorkspaceV1Output represents the results given the input query.
 */
export class GetEventsVolumeFromWorkspaceV1Output {
    /**
     * Observability event volume path.
     */
    'path': string;
    'query': GetEventsVolumeFromWorkspaceV1Query;
    /**
     * The resultant list of series broken down by the dimensions requested over the time frame requested and ordered by the total count of events in all series. Note: The limit of entries returned is 5000.
     */
    'result': Array<SourceEventVolumeV1>;
    'pagination'?: PaginationOutput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'path',
            baseName: 'path',
            type: 'string',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'GetEventsVolumeFromWorkspaceV1Query',
        },
        {
            name: 'result',
            baseName: 'result',
            type: 'Array<SourceEventVolumeV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'PaginationOutput',
        },
    ];

    static getAttributeTypeMap() {
        return GetEventsVolumeFromWorkspaceV1Output.attributeTypeMap;
    }
}
