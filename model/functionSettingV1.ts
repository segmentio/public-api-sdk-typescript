/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 38.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class FunctionSettingV1 {
    /**
     * The name of this Function Setting.
     */
    'name': string;
    /**
     * The label for this Function Setting.
     */
    'label': string;
    /**
     * A description of this Function Setting.
     */
    'description': string;
    /**
     * The type of this Function Setting.
     */
    'type': FunctionSettingV1.TypeEnum;
    /**
     * Whether this Function Setting is required.
     */
    'required': boolean;
    /**
     * Whether this Function Setting contains sensitive information.
     */
    'sensitive': boolean;

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
            name: 'label',
            baseName: 'label',
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
            type: 'FunctionSettingV1.TypeEnum',
        },
        {
            name: 'required',
            baseName: 'required',
            type: 'boolean',
        },
        {
            name: 'sensitive',
            baseName: 'sensitive',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return FunctionSettingV1.attributeTypeMap;
    }
}

export namespace FunctionSettingV1 {
    export enum TypeEnum {
        ARRAY = <any>'ARRAY',
        BOOLEAN = <any>'BOOLEAN',
        STRING = <any>'STRING',
        TEXT_MAP = <any>'TEXT_MAP',
    }
}
