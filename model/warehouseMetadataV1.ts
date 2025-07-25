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
import { IntegrationOptionBeta } from './integrationOptionBeta';
import { LogosBeta } from './logosBeta';

/**
 * The metadata for an instance of Segment’s data Warehouse product.
 */
export class WarehouseMetadataV1 {
    /**
     * The id of this object.
     */
    'id': string;
    /**
     * The name of this object.
     */
    'name': string;
    /**
     * A human-readable, unique identifier for object.
     */
    'slug': string;
    /**
     * A description, in English, of this object.
     */
    'description': string;
    'logos': LogosBeta;
    /**
     * The Integration options for this object.
     */
    'options': Array<IntegrationOptionBeta>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logos',
            baseName: 'logos',
            type: 'LogosBeta',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
    ];

    static getAttributeTypeMap() {
        return WarehouseMetadataV1.attributeTypeMap;
    }
}
