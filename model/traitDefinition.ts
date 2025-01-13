/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class TraitDefinition {
    /**
     * The underlying data type being aggregated for this computed trait.  Possible values: users, accounts.
     */
    'type': TraitDefinition.TypeEnum;
    /**
     * The query language string defining the computed trait aggregation criteria. For guidance on using the query language, see the [Segment documentation site](https://segment.com/docs/api/public-api/query-language).
     */
    'query': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'type',
            baseName: 'type',
            type: 'TraitDefinition.TypeEnum',
        },
        {
            name: 'query',
            baseName: 'query',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return TraitDefinition.attributeTypeMap;
    }
}

export namespace TraitDefinition {
    export enum TypeEnum {
        ACCOUNTS = <any>'ACCOUNTS',
        USERS = <any>'USERS',
    }
}
