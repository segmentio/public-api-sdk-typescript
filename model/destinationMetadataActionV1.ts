/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 50.4.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DestinationMetadataActionFieldV1 } from './destinationMetadataActionFieldV1';

/**
 * Represents an Action, a building block of behavior that can be performed by the Destination.
 */
export class DestinationMetadataActionV1 {
    /**
     * The primary key of the action.
     */
    'id': string;
    /**
     * A machine-readable key unique to the action definition.
     */
    'slug': string;
    /**
     * A human-readable name for the action.
     */
    'name': string;
    /**
     * A human-readable description of the action. May include Markdown.
     */
    'description': string;
    /**
     * The platform on which this action runs.
     */
    'platform': DestinationMetadataActionV1.PlatformEnum;
    /**
     * Whether the action should be hidden.
     */
    'hidden': boolean;
    /**
     * The default value used as the trigger when connecting this action.
     */
    'defaultTrigger': string | null;
    /**
     * The fields expected in order to perform the action.
     */
    'fields': Array<DestinationMetadataActionFieldV1>;

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
            name: 'slug',
            baseName: 'slug',
            type: 'string',
        },
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
            name: 'platform',
            baseName: 'platform',
            type: 'DestinationMetadataActionV1.PlatformEnum',
        },
        {
            name: 'hidden',
            baseName: 'hidden',
            type: 'boolean',
        },
        {
            name: 'defaultTrigger',
            baseName: 'defaultTrigger',
            type: 'string',
        },
        {
            name: 'fields',
            baseName: 'fields',
            type: 'Array<DestinationMetadataActionFieldV1>',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationMetadataActionV1.attributeTypeMap;
    }
}

export namespace DestinationMetadataActionV1 {
    export enum PlatformEnum {
        CLOUD = <any>'CLOUD',
        MOBILE = <any>'MOBILE',
        WEB = <any>'WEB',
    }
}
