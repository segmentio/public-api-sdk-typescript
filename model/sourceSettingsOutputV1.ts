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
import { GroupSourceSettingsV1 } from './groupSourceSettingsV1';
import { IdentifySourceSettingsV1 } from './identifySourceSettingsV1';
import { TrackSourceSettingsV1 } from './trackSourceSettingsV1';

/**
 * The output of Source settings.
 */
export class SourceSettingsOutputV1 {
    'track'?: TrackSourceSettingsV1;
    'identify'?: IdentifySourceSettingsV1;
    'group'?: GroupSourceSettingsV1;
    /**
     * SourceId to forward violations to.
     */
    'forwardingViolationsTo'?: string;
    /**
     * SourceId to forward blocked events to.
     */
    'forwardingBlockedEventsTo'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'track',
            baseName: 'track',
            type: 'TrackSourceSettingsV1',
        },
        {
            name: 'identify',
            baseName: 'identify',
            type: 'IdentifySourceSettingsV1',
        },
        {
            name: 'group',
            baseName: 'group',
            type: 'GroupSourceSettingsV1',
        },
        {
            name: 'forwardingViolationsTo',
            baseName: 'forwardingViolationsTo',
            type: 'string',
        },
        {
            name: 'forwardingBlockedEventsTo',
            baseName: 'forwardingBlockedEventsTo',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return SourceSettingsOutputV1.attributeTypeMap;
    }
}
