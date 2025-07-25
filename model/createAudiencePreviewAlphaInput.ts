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
import { AudienceDefinitionWithoutType } from './audienceDefinitionWithoutType';
import { CreateAudiencePreviewOptions } from './createAudiencePreviewOptions';

/**
 * Input to create an audience preview.
 */
export class CreateAudiencePreviewAlphaInput {
    'definition': AudienceDefinitionWithoutType;
    /**
     * Discriminator denoting the audience\'s product type.  Possible values: USERS, ACCOUNTS, LINKED.
     */
    'audienceType': CreateAudiencePreviewAlphaInput.AudienceTypeEnum;
    'options'?: CreateAudiencePreviewOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'definition',
            baseName: 'definition',
            type: 'AudienceDefinitionWithoutType',
        },
        {
            name: 'audienceType',
            baseName: 'audienceType',
            type: 'CreateAudiencePreviewAlphaInput.AudienceTypeEnum',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'CreateAudiencePreviewOptions',
        },
    ];

    static getAttributeTypeMap() {
        return CreateAudiencePreviewAlphaInput.attributeTypeMap;
    }
}

export namespace CreateAudiencePreviewAlphaInput {
    export enum AudienceTypeEnum {
        ACCOUNTS = <any>'ACCOUNTS',
        LINKED = <any>'LINKED',
        USERS = <any>'USERS',
    }
}
