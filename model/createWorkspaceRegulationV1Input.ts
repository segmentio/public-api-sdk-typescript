/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.3.5
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * The input to create a Workspace regulation.
 */
export class CreateWorkspaceRegulationV1Input {
    /**
     * The regulation type to create.
     */
    'regulationType': CreateWorkspaceRegulationV1Input.RegulationTypeEnum;
    /**
     * The subject type. Use `objectId` for Cloud Source regulations.
     */
    'subjectType': CreateWorkspaceRegulationV1Input.SubjectTypeEnum;
    /**
     * The user or object ids of the subjects to regulate.  Config API note: equal to `parent` but allows an array.
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
            type: 'CreateWorkspaceRegulationV1Input.RegulationTypeEnum',
        },
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'CreateWorkspaceRegulationV1Input.SubjectTypeEnum',
        },
        {
            name: 'subjectIds',
            baseName: 'subjectIds',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return CreateWorkspaceRegulationV1Input.attributeTypeMap;
    }
}

export namespace CreateWorkspaceRegulationV1Input {
    export enum RegulationTypeEnum {
        DELETE_INTERNAL = <any>'DELETE_INTERNAL',
        DELETE_ONLY = <any>'DELETE_ONLY',
        SUPPRESS_ONLY = <any>'SUPPRESS_ONLY',
        SUPPRESS_WITH_DELETE = <any>'SUPPRESS_WITH_DELETE',
        UNSUPPRESS = <any>'UNSUPPRESS',
    }
    export enum SubjectTypeEnum {
        OBJECT_ID = <any>'OBJECT_ID',
        USER_ID = <any>'USER_ID',
    }
}
