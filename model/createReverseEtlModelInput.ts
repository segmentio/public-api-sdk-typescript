/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 53.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Defines how to create a new Model.
 */
export class CreateReverseEtlModelInput {
    /**
     * Indicates which Source to attach this model to.
     */
    'sourceId': string;
    /**
     * A short, human-readable description of the Model.
     */
    'name': string;
    /**
     * A longer, more descriptive explanation of the Model.
     */
    'description': string;
    /**
     * Indicates whether the Model should have syncs enabled. When disabled, no syncs will be triggered, regardless of the enabled status of the attached destinations/subscriptions.
     */
    'enabled': boolean;
    /**
     * Determines the strategy used for triggering syncs, which will be used in conjunction with scheduleConfig.
     */
    'scheduleStrategy': CreateReverseEtlModelInput.ScheduleStrategyEnum;
    /**
     * Defines a configuration object used for scheduling, which can vary depending on the configured strategy, but must always be an object with at least 1 level of keys.
     */
    'scheduleConfig': { [key: string]: any };
    /**
     * The SQL query that will be executed to extract data from the connected Source.
     */
    'query': string;
    /**
     * Indicates the column named in `query` that should be used to uniquely identify the extracted records.
     */
    'queryIdentifierColumn': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'scheduleStrategy',
            baseName: 'scheduleStrategy',
            type: 'CreateReverseEtlModelInput.ScheduleStrategyEnum',
        },
        {
            name: 'scheduleConfig',
            baseName: 'scheduleConfig',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
        {
            name: 'queryIdentifierColumn',
            baseName: 'queryIdentifierColumn',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return CreateReverseEtlModelInput.attributeTypeMap;
    }
}

export namespace CreateReverseEtlModelInput {
    export enum ScheduleStrategyEnum {
        MANUAL = <any>'MANUAL',
        PERIODIC = <any>'PERIODIC',
        SPECIFIC_DAYS = <any>'SPECIFIC_DAYS',
    }
}
