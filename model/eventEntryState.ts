/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.1.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Key } from './key';
import { Transitions } from './transitions';

export class EventEntryState {
    'type': EventEntryState.TypeEnum;
    'condition': string;
    'transitions': Array<Transitions>;
    'key': Key;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'type',
            baseName: 'type',
            type: 'EventEntryState.TypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
        },
        {
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<Transitions>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
    ];

    static getAttributeTypeMap() {
        return EventEntryState.attributeTypeMap;
    }
}

export namespace EventEntryState {
    export enum TypeEnum {
        EVENT_ENTRY = <any>'EVENT_ENTRY',
        AUDIENCE_ENTRY = <any>'AUDIENCE_ENTRY',
        DESTINATION = <any>'DESTINATION',
        SIMPLE_DELAY = <any>'SIMPLE_DELAY',
        EVENT_SPLIT = <any>'EVENT_SPLIT',
        CONDITION_SPLIT = <any>'CONDITION_SPLIT',
        RANDOM_SPLIT = <any>'RANDOM_SPLIT',
        EXIT = <any>'EXIT',
        EXIT_RULE = <any>'EXIT_RULE',
    }
}
