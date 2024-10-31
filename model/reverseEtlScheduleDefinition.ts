/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 56.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Config } from './config';

/**
 * Defines a configuration object used for scheduling, which can vary depending on the configured strategy.
 */
export class ReverseEtlScheduleDefinition {
    /**
     * Strategy supports three modes: Periodic, Specific Days, or Manual.
     */
    'strategy': ReverseEtlScheduleDefinition.StrategyEnum;
    'config'?: Config | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'strategy',
            baseName: 'strategy',
            type: 'ReverseEtlScheduleDefinition.StrategyEnum',
        },
        {
            name: 'config',
            baseName: 'config',
            type: 'Config',
        },
    ];

    static getAttributeTypeMap() {
        return ReverseEtlScheduleDefinition.attributeTypeMap;
    }
}

export namespace ReverseEtlScheduleDefinition {
    export enum StrategyEnum {
        MANUAL = <any>'MANUAL',
        PERIODIC = <any>'PERIODIC',
        SPECIFIC_DAYS = <any>'SPECIFIC_DAYS',
    }
}
