/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ReverseEtlCronScheduleConfig } from './reverseEtlCronScheduleConfig';
import { ReverseEtlPeriodicScheduleConfig } from './reverseEtlPeriodicScheduleConfig';
import { ReverseEtlSpecificTimeScheduleConfig } from './reverseEtlSpecificTimeScheduleConfig';

/**
 * Config contains interval duration in case of periodic or day and hours in case of specific_days. Empty if strategy is MANUAL.
 */
export class Config {
    /**
     * Duration is specified as a string, EG: 15m, 3h25m30s.
     */
    'interval': string;
    /**
     * Days of the week.
     */
    'days': Array<number>;
    /**
     * Hours of the day.
     */
    'hours': Array<number>;
    /**
     * Timezone respected by the cron string. Format must be in IANA Timezone Identifier. Example: \'America/Los_Angeles\'.
     */
    'timezone': string;
    /**
     * 5 field cron string expression. The cron expression must be larger than 15 minutes.
     */
    'spec': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'interval',
            baseName: 'interval',
            type: 'string',
        },
        {
            name: 'days',
            baseName: 'days',
            type: 'Array<number>',
        },
        {
            name: 'hours',
            baseName: 'hours',
            type: 'Array<number>',
        },
        {
            name: 'timezone',
            baseName: 'timezone',
            type: 'string',
        },
        {
            name: 'spec',
            baseName: 'spec',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Config.attributeTypeMap;
    }
}
