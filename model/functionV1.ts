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
import { FunctionSettingV1 } from './functionSettingV1';

/**
 * Represents a Function.
 */
export class FunctionV1 {
    /**
     * An identifier for this Function.
     */
    'id'?: string;
    /**
     * The Function type.  Config API note: equal to `type`.
     */
    'resourceType'?: FunctionV1.ResourceTypeEnum;
    /**
     * The time this Function was created.
     */
    'createdAt'?: string;
    /**
     * The id of the user who created this Function.
     */
    'createdBy'?: string;
    /**
     * The Function code.
     */
    'code'?: string;
    /**
     * The time of this Function\'s last deployment.
     */
    'deployedAt'?: string | null;
    /**
     * The list of settings for this Function.
     */
    'settings'?: Array<FunctionSettingV1>;
    /**
     * A display name for this Function.
     */
    'displayName'?: string;
    /**
     * A description for this Function.
     */
    'description'?: string;
    /**
     * The URL of the logo for this Function.
     */
    'logoUrl'?: string;
    /**
     * The preview webhook URL for this Function.
     */
    'previewWebhookUrl'?: string;
    /**
     * The max count of the batch for this Function.
     */
    'batchMaxCount'?: number;
    /**
     * The catalog id of this Function.
     */
    'catalogId'?: string;
    /**
     * Whether the deployment of this Function is the latest version.
     */
    'isLatestVersion'?: boolean;

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
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'FunctionV1.ResourceTypeEnum',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'deployedAt',
            baseName: 'deployedAt',
            type: 'string',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: 'Array<FunctionSettingV1>',
        },
        {
            name: 'displayName',
            baseName: 'displayName',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'logoUrl',
            baseName: 'logoUrl',
            type: 'string',
        },
        {
            name: 'previewWebhookUrl',
            baseName: 'previewWebhookUrl',
            type: 'string',
        },
        {
            name: 'batchMaxCount',
            baseName: 'batchMaxCount',
            type: 'number',
        },
        {
            name: 'catalogId',
            baseName: 'catalogId',
            type: 'string',
        },
        {
            name: 'isLatestVersion',
            baseName: 'isLatestVersion',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return FunctionV1.attributeTypeMap;
    }
}

export namespace FunctionV1 {
    export enum ResourceTypeEnum {
        DESTINATION = <any>'DESTINATION',
        INSERT_DESTINATION = <any>'INSERT_DESTINATION',
        INSERT_SOURCE = <any>'INSERT_SOURCE',
        SOURCE = <any>'SOURCE',
    }
}
