/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.0.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Group } from './group';
import { Identify } from './identify';
import { SourceSettingsOutputV1 } from './sourceSettingsOutputV1';
import { Track } from './track';

/**
 * The output of Source settings.
 */
export class Settings1 {
    'track'?: Track;
    'identify'?: Identify;
    'group'?: Group;
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
            type: 'Track',
        },
        {
            name: 'identify',
            baseName: 'identify',
            type: 'Identify',
        },
        {
            name: 'group',
            baseName: 'group',
            type: 'Group',
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
        return Settings1.attributeTypeMap;
    }
}
