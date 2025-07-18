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

export class HashPropertiesConfiguration {
    /**
     * Which algorithm to use to hash to properties.
     */
    'algorithm': string;
    /**
     * Optional key to hash with.
     */
    'key'?: string;
    /**
     * Optional encoding to use for the hashing.
     */
    'encoding'?: HashPropertiesConfiguration.EncodingEnum;
    /**
     * The paths to the properties to be hashed.
     */
    'paths': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'algorithm',
            baseName: 'algorithm',
            type: 'string',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'encoding',
            baseName: 'encoding',
            type: 'HashPropertiesConfiguration.EncodingEnum',
        },
        {
            name: 'paths',
            baseName: 'paths',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return HashPropertiesConfiguration.attributeTypeMap;
    }
}

export namespace HashPropertiesConfiguration {
    export enum EncodingEnum {
        BASE16 = <any>'BASE16',
        BASE64 = <any>'BASE64',
        BASE64URL = <any>'BASE64URL',
        HEX = <any>'HEX',
    }
}
