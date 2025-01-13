/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * GetEventVolumeOutputQuery represents the input query sent to output.
 */
export class GetEventsVolumeFromWorkspaceV1Query {
    /**
     * Workspace being requested.
     */
    'workspaceId': string;
    /**
     * Granularity corresponds to the requested bucket granularity.
     */
    'granularity': GetEventsVolumeFromWorkspaceV1Query.GranularityEnum;
    /**
     * StartTime is the ISO8601 formatted timestamp corresponding to the beginning of the requested time frame, inclusive.
     */
    'startTime': string;
    /**
     * EndTime is the ISO8601 formatted timestamp corresponding to the end of the requested time frame, noninclusive.
     */
    'endTime': string;
    /**
     * GroupBy is a comma-delimited list of strings representing the dimensions to group the result by. The current options are: `eventName` or `eventType`.
     */
    'groupBy'?: Array<string>;
    /**
     * List of strings which allow you to restrict the result to just the given Sources.
     */
    'sourceId'?: Array<string>;
    /**
     * EventName is a list of strings which allow you to restrict the result to just the given event names.
     */
    'eventName'?: Array<string>;
    /**
     * EventType is a list of strings which allow you to restrict the result to just the given event types.
     */
    'eventType'?: Array<string>;
    /**
     * AppVersion is a list of strings which allow you to restrict the result to just the given application versions.
     */
    'appVersion'?: Array<string>;
    /**
     * Limit is the total number of items in the result.
     */
    'limit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'granularity',
            baseName: 'granularity',
            type: 'GetEventsVolumeFromWorkspaceV1Query.GranularityEnum',
        },
        {
            name: 'startTime',
            baseName: 'startTime',
            type: 'string',
        },
        {
            name: 'endTime',
            baseName: 'endTime',
            type: 'string',
        },
        {
            name: 'groupBy',
            baseName: 'groupBy',
            type: 'Array<string>',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'Array<string>',
        },
        {
            name: 'eventName',
            baseName: 'eventName',
            type: 'Array<string>',
        },
        {
            name: 'eventType',
            baseName: 'eventType',
            type: 'Array<string>',
        },
        {
            name: 'appVersion',
            baseName: 'appVersion',
            type: 'Array<string>',
        },
        {
            name: 'limit',
            baseName: 'limit',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return GetEventsVolumeFromWorkspaceV1Query.attributeTypeMap;
    }
}

export namespace GetEventsVolumeFromWorkspaceV1Query {
    export enum GranularityEnum {
        DAY = <any>'DAY',
        HOUR = <any>'HOUR',
        MINUTE = <any>'MINUTE',
    }
}
