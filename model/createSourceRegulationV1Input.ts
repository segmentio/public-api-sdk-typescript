/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 55.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * The input to create a Source-scoped regulation.
 */
export class CreateSourceRegulationV1Input {
    /**
     * The regulation type to create.
     */
    'regulationType': CreateSourceRegulationV1Input.RegulationTypeEnum;
    /**
     * The subject type.
     */
    'subjectType': CreateSourceRegulationV1Input.SubjectTypeEnum;
    /**
     * The list of `userId` or `objectId` values of the subjects to regulate.  Config API note: equal to `parent` but allows an array.
     */
    'subjectIds': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'regulationType',
            baseName: 'regulationType',
            type: 'CreateSourceRegulationV1Input.RegulationTypeEnum',
        },
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'CreateSourceRegulationV1Input.SubjectTypeEnum',
        },
        {
            name: 'subjectIds',
            baseName: 'subjectIds',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return CreateSourceRegulationV1Input.attributeTypeMap;
    }
}

export namespace CreateSourceRegulationV1Input {
    export enum RegulationTypeEnum {
        DELETE_INTERNAL = <any>'DELETE_INTERNAL',
        DELETE_ONLY = <any>'DELETE_ONLY',
        SUPPRESS_ONLY = <any>'SUPPRESS_ONLY',
        SUPPRESS_WITH_DELETE = <any>'SUPPRESS_WITH_DELETE',
        SUPPRESS_WITH_DELETE_INTERNAL = <any>'SUPPRESS_WITH_DELETE_INTERNAL',
        UNSUPPRESS = <any>'UNSUPPRESS',
    }
    export enum SubjectTypeEnum {
        USER_ID = <any>'USER_ID',
    }
}
