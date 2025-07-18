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

/**
 * Represents the parameters needed to identify a rule on the backend-side.
 */
export class RemoveRuleV1 {
    /**
     * The type for this Tracking Plan rule.
     */
    'type': RemoveRuleV1.TypeEnum;
    /**
     * Key to this rule (free-form string like \'Button clicked\').
     */
    'key'?: string;
    /**
     * Version of this rule.
     */
    'version': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'type',
            baseName: 'type',
            type: 'RemoveRuleV1.TypeEnum',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return RemoveRuleV1.attributeTypeMap;
    }
}

export namespace RemoveRuleV1 {
    export enum TypeEnum {
        COMMON = <any>'COMMON',
        GROUP = <any>'GROUP',
        IDENTIFY = <any>'IDENTIFY',
        PAGE = <any>'PAGE',
        SCREEN = <any>'SCREEN',
        TRACK = <any>'TRACK',
    }
}
