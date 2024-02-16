/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 43.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents a component this Destination provides.
 */
export class DestinationMetadataComponentV1 {
    /**
     * The component type.
     */
    'type': DestinationMetadataComponentV1.TypeEnum;
    /**
     * Link to the repository hosting the code for this component.
     */
    'code': string;
    /**
     * The owner of this component. Either \'SEGMENT\' or \'PARTNER\'.
     */
    'owner'?: DestinationMetadataComponentV1.OwnerEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'type',
            baseName: 'type',
            type: 'DestinationMetadataComponentV1.TypeEnum',
        },
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'owner',
            baseName: 'owner',
            type: 'DestinationMetadataComponentV1.OwnerEnum',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationMetadataComponentV1.attributeTypeMap;
    }
}

export namespace DestinationMetadataComponentV1 {
    export enum TypeEnum {
        ANDROID = <any>'ANDROID',
        BROWSER = <any>'BROWSER',
        IOS = <any>'IOS',
        SERVER = <any>'SERVER',
    }
    export enum OwnerEnum {
        PARTNER = <any>'PARTNER',
        SEGMENT = <any>'SEGMENT',
    }
}
