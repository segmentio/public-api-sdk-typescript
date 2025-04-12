/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 58.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ComputedTraitsDefinition } from './computedTraitsDefinition';
import { TraitOptions } from './traitOptions';

/**
 * Defines a Computed trait.
 */
export class ComputedTraitSummary {
    /**
     * Computed trait id.
     */
    'id': string;
    /**
     * Space id for the computed trait.
     */
    'spaceId': string;
    /**
     * Name of the computed trait.
     */
    'name': string;
    /**
     * Description of the computed trait.
     */
    'description'?: string;
    /**
     * Key for the computed trait.
     */
    'key': string;
    /**
     * Enabled/disabled status for the computed trait.
     */
    'enabled': boolean;
    'definition': ComputedTraitsDefinition | null;
    /**
     * Status for the computed trait.  Possible values: Backfilling, Computing, Failed, Live, Awaiting Destinations, Disabled.
     */
    'status'?: string;
    /**
     * User id who created the computed trait.
     */
    'createdBy': string;
    /**
     * User id who last updated the computed trait.
     */
    'updatedBy': string;
    /**
     * The timestamp of the computed trait\'s creation.
     */
    'createdAt': string;
    /**
     * The timestamp of the computed trait\'s last change.
     */
    'updatedAt': string;
    'options'?: TraitOptions;

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
            name: 'spaceId',
            baseName: 'spaceId',
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
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'definition',
            baseName: 'definition',
            type: 'ComputedTraitsDefinition',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'createdBy',
            baseName: 'createdBy',
            type: 'string',
        },
        {
            name: 'updatedBy',
            baseName: 'updatedBy',
            type: 'string',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'updatedAt',
            baseName: 'updatedAt',
            type: 'string',
        },
        {
            name: 'options',
            baseName: 'options',
            type: 'TraitOptions',
        },
    ];

    static getAttributeTypeMap() {
        return ComputedTraitSummary.attributeTypeMap;
    }
}
