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
import { Contact } from './contact';
import { DestinationMetadataActionV1 } from './destinationMetadataActionV1';
import { DestinationMetadataComponentV1 } from './destinationMetadataComponentV1';
import { DestinationMetadataFeaturesV1 } from './destinationMetadataFeaturesV1';
import { DestinationMetadataMethodsV1 } from './destinationMetadataMethodsV1';
import { DestinationMetadataPlatformsV1 } from './destinationMetadataPlatformsV1';
import { DestinationMetadataSubscriptionPresetV1 } from './destinationMetadataSubscriptionPresetV1';
import { IntegrationOptionBeta } from './integrationOptionBeta';
import { LogosBeta } from './logosBeta';

/**
 * Represents a Destination within Segment.  A Destination is a target for Segment to forward data to, and represents a tool or storage Destination.
 */
export class DestinationMetadataV1 {
    /**
     * The id of the Destination metadata.  Config API note: analogous to `name`.
     */
    'id': string;
    /**
     * The user-friendly name of the Destination.  Config API note: equal to `displayName`.
     */
    'name': string;
    /**
     * The description of the Destination.
     */
    'description': string;
    /**
     * The slug used to identify the Destination in the Segment app.
     */
    'slug': string;
    'logos': LogosBeta;
    /**
     * Options configured for the Destination.
     */
    'options': Array<IntegrationOptionBeta>;
    /**
     * Support status of the Destination.
     */
    'status': DestinationMetadataV1.StatusEnum;
    /**
     * A list of names previously used by the Destination.
     */
    'previousNames': Array<string>;
    /**
     * A list of categories with which the Destination is associated.
     */
    'categories': Array<string>;
    /**
     * A website URL for this Destination.
     */
    'website': string;
    /**
     * A list of components this Destination provides.
     */
    'components': Array<DestinationMetadataComponentV1>;
    'supportedFeatures': DestinationMetadataFeaturesV1;
    'supportedMethods': DestinationMetadataMethodsV1;
    'supportedPlatforms': DestinationMetadataPlatformsV1;
    /**
     * Actions available for the Destination.
     */
    'actions': Array<DestinationMetadataActionV1>;
    /**
     * Predefined Destination subscriptions that can optionally be applied when connecting a new instance of the Destination.
     */
    'presets': Array<DestinationMetadataSubscriptionPresetV1>;
    /**
     * Contact info for Integration Owners.
     */
    'contacts'?: Array<Contact>;
    /**
     * Partner Owned flag.
     */
    'partnerOwned'?: boolean;
    /**
     * A list of supported regions for this Destination.
     */
    'supportedRegions'?: Array<string>;
    /**
     * The list of regional endpoints for this Destination.
     */
    'regionEndpoints'?: Array<string>;

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
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'slug',
            baseName: 'slug',
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
            name: 'status',
            baseName: 'status',
            type: 'DestinationMetadataV1.StatusEnum',
        },
        {
            name: 'previousNames',
            baseName: 'previousNames',
            type: 'Array<string>',
        },
        {
            name: 'categories',
            baseName: 'categories',
            type: 'Array<string>',
        },
        {
            name: 'website',
            baseName: 'website',
            type: 'string',
        },
        {
            name: 'components',
            baseName: 'components',
            type: 'Array<DestinationMetadataComponentV1>',
        },
        {
            name: 'supportedFeatures',
            baseName: 'supportedFeatures',
            type: 'DestinationMetadataFeaturesV1',
        },
        {
            name: 'supportedMethods',
            baseName: 'supportedMethods',
            type: 'DestinationMetadataMethodsV1',
        },
        {
            name: 'supportedPlatforms',
            baseName: 'supportedPlatforms',
            type: 'DestinationMetadataPlatformsV1',
        },
        {
            name: 'actions',
            baseName: 'actions',
            type: 'Array<DestinationMetadataActionV1>',
        },
        {
            name: 'presets',
            baseName: 'presets',
            type: 'Array<DestinationMetadataSubscriptionPresetV1>',
        },
        {
            name: 'contacts',
            baseName: 'contacts',
            type: 'Array<Contact>',
        },
        {
            name: 'partnerOwned',
            baseName: 'partnerOwned',
            type: 'boolean',
        },
        {
            name: 'supportedRegions',
            baseName: 'supportedRegions',
            type: 'Array<string>',
        },
        {
            name: 'regionEndpoints',
            baseName: 'regionEndpoints',
            type: 'Array<string>',
        },
    ];

    static getAttributeTypeMap() {
        return DestinationMetadataV1.attributeTypeMap;
    }
}

export namespace DestinationMetadataV1 {
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
