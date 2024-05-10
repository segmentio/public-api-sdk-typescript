/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 50.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Echo response.
 */
export class EchoV1Output {
    /**
     * The HTTP method used for this round-trip.  Currently, this endpoint supports only `get` and `post` methods.
     */
    'method': EchoV1Output.MethodEnum;
    /**
     * The string passed in the `message` input field.
     */
    'message': string;
    /**
     * The request\'s HTTP headers.
     */
    'headers': { [key: string]: any };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'method',
            baseName: 'method',
            type: 'EchoV1Output.MethodEnum',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'headers',
            baseName: 'headers',
            type: '{ [key: string]: any; }',
        },
    ];

    static getAttributeTypeMap() {
        return EchoV1Output.attributeTypeMap;
    }
}

export namespace EchoV1Output {
    export enum MethodEnum {
        get = <any>'get',
        post = <any>'post',
    }
}
