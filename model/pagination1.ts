/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.4.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PaginationInput } from './paginationInput';

/**
 * Pagination options.
 */
export class Pagination1 {
    /**
     * The page to request.  Acceptable values to use here are in PaginationOutput objects, in the `current`, `next`, and `previous` keys.  Consumers of the API must treat this value as opaque.
     */
    'cursor'?: string;
    /**
     * The number of items to retrieve in a page, between 1 and 200.
     */
    'count': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'cursor',
            baseName: 'cursor',
            type: 'string',
        },
        {
            name: 'count',
            baseName: 'count',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return Pagination1.attributeTypeMap;
    }
}
