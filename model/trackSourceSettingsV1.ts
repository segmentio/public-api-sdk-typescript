/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 50.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class TrackSourceSettingsV1 {
    /**
     * Enable to allow unplanned track events.  Config API note: equal to `allowUnplannedTrackEvents`.
     */
    'allowUnplannedEvents'?: boolean;
    /**
     * Enable to allow unplanned track event properties.  Config API note: equal to `allowUnplannedTrackEventProperties`.
     */
    'allowUnplannedEventProperties'?: boolean;
    /**
     * Allow track event on violations.  Config API note: equal to `allowTrackEventOnViolations`.
     */
    'allowEventOnViolations'?: boolean;
    /**
     * Enable to allow track properties on violations.  Config API note: equal to `allowTrackEventPropertiesOnViolations`.
     */
    'allowPropertiesOnViolations'?: boolean;
    /**
     * The common track event on violations.  Config API note: equal to `commonTrackEventOnViolations`.
     */
    'commonEventOnViolations'?: TrackSourceSettingsV1.CommonEventOnViolationsEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'allowUnplannedEvents',
            baseName: 'allowUnplannedEvents',
            type: 'boolean',
        },
        {
            name: 'allowUnplannedEventProperties',
            baseName: 'allowUnplannedEventProperties',
            type: 'boolean',
        },
        {
            name: 'allowEventOnViolations',
            baseName: 'allowEventOnViolations',
            type: 'boolean',
        },
        {
            name: 'allowPropertiesOnViolations',
            baseName: 'allowPropertiesOnViolations',
            type: 'boolean',
        },
        {
            name: 'commonEventOnViolations',
            baseName: 'commonEventOnViolations',
            type: 'TrackSourceSettingsV1.CommonEventOnViolationsEnum',
        },
    ];

    static getAttributeTypeMap() {
        return TrackSourceSettingsV1.attributeTypeMap;
    }
}

export namespace TrackSourceSettingsV1 {
    export enum CommonEventOnViolationsEnum {
        ALLOW = <any>'ALLOW',
        BLOCK = <any>'BLOCK',
        OMIT_PROPERTIES = <any>'OMIT_PROPERTIES',
    }
}
