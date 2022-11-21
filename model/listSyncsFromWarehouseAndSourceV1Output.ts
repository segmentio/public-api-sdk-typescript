/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 33.0.2
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Pagination } from './pagination';
import { SyncV1 } from './syncV1';

/**
 * Returns a list that contains the most recent syncs for a Warehouse-source pair, filtered and constrained by a given set of pagination parameters.
 */
export class ListSyncsFromWarehouseAndSourceV1Output {
    /**
     * A list that contains the latest syncs for the specified Warehouse-source pair.
     */
    'reports': Array<SyncV1>;
    'pagination': Pagination;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'reports',
            baseName: 'reports',
            type: 'Array<SyncV1>',
        },
        {
            name: 'pagination',
            baseName: 'pagination',
            type: 'Pagination',
        },
    ];

    static getAttributeTypeMap() {
        return ListSyncsFromWarehouseAndSourceV1Output.attributeTypeMap;
    }
}
