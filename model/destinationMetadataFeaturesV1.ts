/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents features that a given Destination supports.
 */
export class DestinationMetadataFeaturesV1 {
    /**
     * This Destination\'s support level for cloud mode instances. The values \'0\' and \'NONE\', and \'1\' and \'SINGLE\' are equivalent.
     */
    'cloudModeInstances'?: DestinationMetadataFeaturesV1.CloudModeInstancesEnum;
    /**
     * This Destination\'s support level for device mode instances. Support for multiple device mode instances is currently not planned. The values \'0\' and \'NONE\', and \'1\' and \'SINGLE\' are equivalent.
     */
    'deviceModeInstances'?: DestinationMetadataFeaturesV1.DeviceModeInstancesEnum;
    /**
     * Whether this Destination supports replays.
     */
    'replay'?: boolean;
    /**
     * Whether this Destination supports browser unbundling.
     */
    'browserUnbundling'?: boolean;
    /**
     * Whether this Destination supports public browser unbundling.
     */
    'browserUnbundlingPublic'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'cloudModeInstances',
            baseName: 'cloudModeInstances',
            type: 'DestinationMetadataFeaturesV1.CloudModeInstancesEnum',
        },
        {
            name: 'deviceModeInstances',
            baseName: 'deviceModeInstances',
            type: 'DestinationMetadataFeaturesV1.DeviceModeInstancesEnum',
        },
        {
            name: 'replay',
            baseName: 'replay',
            type: 'boolean',
        },
        {
            name: 'browserUnbundling',
            baseName: 'browserUnbundling',
            type: 'boolean',
        },
        {
            name: 'browserUnbundlingPublic',
            baseName: 'browserUnbundlingPublic',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationMetadataFeaturesV1.attributeTypeMap;
    }
}

export namespace DestinationMetadataFeaturesV1 {
    export enum CloudModeInstancesEnum {
        _0 = <any>'0',
        _1 = <any>'1',
        MULTIPLE = <any>'MULTIPLE',
        NONE = <any>'NONE',
        SINGLE = <any>'SINGLE',
    }
    export enum DeviceModeInstancesEnum {
        _0 = <any>'0',
        _1 = <any>'1',
        NONE = <any>'NONE',
        SINGLE = <any>'SINGLE',
    }
}
