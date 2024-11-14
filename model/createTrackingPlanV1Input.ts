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

/**
 * Creates a Tracking Plan in the Workspace.
 */
export class CreateTrackingPlanV1Input {
    /**
     * The Tracking Plan\'s name.  Config API note: equal to `displayName`.
     */
    'name': string;
    /**
     * The Tracking Plan\'s description.
     */
    'description'?: string;
    /**
     * The Tracking Plan\'s type.
     */
    'type': CreateTrackingPlanV1Input.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'CreateTrackingPlanV1Input.TypeEnum',
        },
    ];

    static getAttributeTypeMap() {
        return CreateTrackingPlanV1Input.attributeTypeMap;
    }
}

export namespace CreateTrackingPlanV1Input {
    export enum TypeEnum {
        ENGAGE = <any>'ENGAGE',
        LIVE = <any>'LIVE',
        PROPERTY_LIBRARY = <any>'PROPERTY_LIBRARY',
        RULE_LIBRARY = <any>'RULE_LIBRARY',
        TEMPLATE = <any>'TEMPLATE',
    }
}
