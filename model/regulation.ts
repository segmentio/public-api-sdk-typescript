/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 32.0.5
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { StreamStatusV1 } from './streamStatusV1';

/**
 * The regulate request.
 */
export class Regulation {
    /**
     * The id of the regulate request.
     */
    'id': string;
    /**
     * The id of the Workspace that the regulate request belongs to.
     */
    'workspaceId': string;
    /**
     * The current status of the regulate request.
     */
    'overallStatus': Regulation.OverallStatusEnum;
    /**
     * The timestamp of when the request finished.
     */
    'finishedAt': string;
    /**
     * The timestamp of the creation of the request.
     */
    'createdAt': string;
    /**
     * The status of each stream including all the Destinations that correspond to the stream.
     */
    'streamStatus': Array<StreamStatusV1>;

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
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'overallStatus',
            baseName: 'overallStatus',
            type: 'Regulation.OverallStatusEnum',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'streamStatus',
            baseName: 'streamStatus',
            type: 'Array<StreamStatusV1>',
        },
    ];

    static getAttributeTypeMap() {
        return Regulation.attributeTypeMap;
    }
}

export namespace Regulation {
    export enum OverallStatusEnum {
        FAILED = <any>'FAILED',
        FINISHED = <any>'FINISHED',
        INITIALIZED = <any>'INITIALIZED',
        INVALID = <any>'INVALID',
        NOT_SUPPORTED = <any>'NOT_SUPPORTED',
        PARTIAL_SUCCESS = <any>'PARTIAL_SUCCESS',
        RUNNING = <any>'RUNNING',
    }
}
