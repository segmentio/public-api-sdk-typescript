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

export class GroupSourceSettingsV1 {
    /**
     * Enable to allow unplanned group traits.  Config API note: equal to `allowUnplannedGroupTraits`.
     */
    'allowUnplannedTraits'?: boolean;
    /**
     * Enable to allow group traits on violations.  Config API note: equal to `allowGroupTraitsOnViolations`.
     */
    'allowTraitsOnViolations'?: boolean;
    /**
     * The common group event on violations.  Config API note: equal to `commonGroupEventOnViolations`.
     */
    'commonEventOnViolations'?: GroupSourceSettingsV1.CommonEventOnViolationsEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'allowUnplannedTraits',
            baseName: 'allowUnplannedTraits',
            type: 'boolean',
        },
        {
            name: 'allowTraitsOnViolations',
            baseName: 'allowTraitsOnViolations',
            type: 'boolean',
        },
        {
            name: 'commonEventOnViolations',
            baseName: 'commonEventOnViolations',
            type: 'GroupSourceSettingsV1.CommonEventOnViolationsEnum',
        },
    ];

    static getAttributeTypeMap() {
        return GroupSourceSettingsV1.attributeTypeMap;
    }
}

export namespace GroupSourceSettingsV1 {
    export enum CommonEventOnViolationsEnum {
        ALLOW = <any>'ALLOW',
        BLOCK = <any>'BLOCK',
        OMIT_TRAITS = <any>'OMIT_TRAITS',
    }
}
