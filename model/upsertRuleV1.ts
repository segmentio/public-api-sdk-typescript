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

export class UpsertRuleV1 {
    /**
     * This rule\'s new intended key.
     */
    'newKey'?: string;
    /**
     * The type for this Tracking Plan rule.
     */
    'type': UpsertRuleV1.TypeEnum;
    /**
     * Key to this rule (free-form string like \'Button clicked\').
     */
    'key'?: string;
    /**
     * JSON Schema of this rule.
     */
    'jsonSchema': any | null;
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
            name: 'newKey',
            baseName: 'newKey',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'UpsertRuleV1.TypeEnum',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'jsonSchema',
            baseName: 'jsonSchema',
            type: 'any',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return UpsertRuleV1.attributeTypeMap;
    }
}

export namespace UpsertRuleV1 {
    export enum TypeEnum {
        COMMON = <any>'COMMON',
        GROUP = <any>'GROUP',
        IDENTIFY = <any>'IDENTIFY',
        PAGE = <any>'PAGE',
        SCREEN = <any>'SCREEN',
        TRACK = <any>'TRACK',
    }
}
