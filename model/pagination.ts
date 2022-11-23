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
import { PaginationOutput } from './paginationOutput';

/**
 * Information about the pagination of this response.
 */
export class Pagination {
    /**
     * The current cursor within a collection.  Consumers of the API must treat this value as opaque.
     */
    'current': string;
    /**
     * A pointer to the next page.  This does not return when you retrieve the last page.  Consumers of the API must treat this value as opaque.
     */
    'next'?: string | null;
    /**
     * A pointer to the previous page.  This does not return when you retrieve the first page.  Consumers of the API must treat this value as opaque.
     */
    'previous'?: string | null;
    /**
     * The total number of entries available in the collection.  If calculating it impacts performance, the response may omit this field.
     */
    'totalEntries'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'current',
            baseName: 'current',
            type: 'string',
        },
        {
            name: 'next',
            baseName: 'next',
            type: 'string',
        },
        {
            name: 'previous',
            baseName: 'previous',
            type: 'string',
        },
        {
            name: 'totalEntries',
            baseName: 'totalEntries',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return Pagination.attributeTypeMap;
    }
}
