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
import { AudienceEntryState } from './audienceEntryState';
import { ConditionSplitState } from './conditionSplitState';
import { Destination } from './destination';
import { DestinationState } from './destinationState';
import { EventEntryState } from './eventEntryState';
import { EventSplitWithTimeoutState } from './eventSplitWithTimeoutState';
import { Key } from './key';
import { RandomSplitBranch } from './randomSplitBranch';
import { RandomSplitState } from './randomSplitState';
import { SimpleDelayState } from './simpleDelayState';

export class TransitionState {
    'type': TransitionState.TypeEnum;
    'condition': string;
    'transitions': Array<RandomSplitBranch>;
    'key': Key;
    'audienceId': string;
    'destinations': Array<Destination>;
    'duration': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'type',
            baseName: 'type',
            type: 'TransitionState.TypeEnum',
        },
        {
            name: 'condition',
            baseName: 'condition',
            type: 'string',
        },
        {
            name: 'transitions',
            baseName: 'transitions',
            type: 'Array<RandomSplitBranch>',
        },
        {
            name: 'key',
            baseName: 'key',
            type: 'Key',
        },
        {
            name: 'audienceId',
            baseName: 'audienceId',
            type: 'string',
        },
        {
            name: 'destinations',
            baseName: 'destinations',
            type: 'Array<Destination>',
        },
        {
            name: 'duration',
            baseName: 'duration',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return TransitionState.attributeTypeMap;
    }
}

export namespace TransitionState {
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
