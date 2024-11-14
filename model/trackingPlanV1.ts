/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.0.1
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents a Tracking Plan.
 */
export class TrackingPlanV1 {
    /**
     * The Tracking Plan\'s identifier.  Config API note: analogous to `name`.
     */
    'id': string;
    /**
     * The Tracking Plan\'s name.  Config API note: equal to `displayName`.
     */
    'name'?: string;
    /**
     * URL-friendly slug of this Tracking Plan.  Config API note: equal to `name`.
     */
    'slug'?: string;
    /**
     * The Tracking Plan\'s description.
     */
    'description'?: string;
    /**
     * The Tracking Plan\'s type.
     */
    'type': TrackingPlanV1.TypeEnum;
    /**
     * The timestamp of the last change to the Tracking Plan.  Config API note: equal to `updateTime`.
     */
    'updatedAt'?: string;
    /**
     * The timestamp of this Tracking Plan\'s creation.  Config API note: equal to `createTime`.
     */
    'createdAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
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
            type: 'TrackingPlanV1.TypeEnum',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return TrackingPlanV1.attributeTypeMap;
    }
}

export namespace TrackingPlanV1 {
    export enum TypeEnum {
        ENGAGE = <any>'ENGAGE',
        LIVE = <any>'LIVE',
        PROPERTY_LIBRARY = <any>'PROPERTY_LIBRARY',
        RULE_LIBRARY = <any>'RULE_LIBRARY',
        TEMPLATE = <any>'TEMPLATE',
    }
}
