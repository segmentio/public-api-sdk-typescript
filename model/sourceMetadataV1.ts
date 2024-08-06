/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 52.0.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IntegrationOptionBeta } from './integrationOptionBeta';
import { LogosBeta } from './logosBeta';

/**
 * A website, server library, mobile SDK, or cloud application which can send data into Segment.
 */
export class SourceMetadataV1 {
    /**
     * The id for this Source metadata in the Segment catalog.  Config API note: analogous to `name`.
     */
    'id': string;
    /**
     * The user-friendly name of this Source.  Config API note: equal to `displayName`.
     */
    'name': string;
    /**
     * The slug that identifies this Source in the Segment app.  Config API note: equal to `name`.
     */
    'slug': string;
    /**
     * The description of this Source.
     */
    'description': string;
    'logos': LogosBeta;
    /**
     * Options for this Source.
     */
    'options': Array<IntegrationOptionBeta>;
    /**
     * A list of categories this Source belongs to.
     */
    'categories': Array<string>;
    /**
     * True if this is a Cloud Event Source.
     */
    'isCloudEventSource': boolean;
    /**
     * Support status of the Source.
     */
    'status': SourceMetadataV1.StatusEnum;
    /**
     * Partner Owned flag.
     */
    'partnerOwned'?: boolean;

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
            name: 'logos',
            baseName: 'logos',
            type: 'LogosBeta',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'Array<IntegrationOptionBeta>',
        },
        {
            name: 'categories',
            baseName: 'categories',
            type: 'Array<string>',
        },
        {
            name: 'isCloudEventSource',
            baseName: 'isCloudEventSource',
            type: 'boolean',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'SourceMetadataV1.StatusEnum',
        },
        {
            name: 'partnerOwned',
            baseName: 'partnerOwned',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return SourceMetadataV1.attributeTypeMap;
    }
}

export namespace SourceMetadataV1 {
    export enum StatusEnum {
        DEPRECATED = <any>'DEPRECATED',
        PRIVATE_BETA = <any>'PRIVATE_BETA',
        PRIVATE_BUILDING = <any>'PRIVATE_BUILDING',
        PRIVATE_SUBMITTED = <any>'PRIVATE_SUBMITTED',
        PUBLIC = <any>'PUBLIC',
        PUBLIC_BETA = <any>'PUBLIC_BETA',
        UNAVAILABLE = <any>'UNAVAILABLE',
    }
}
