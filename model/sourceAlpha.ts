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
import { LabelV1 } from './labelV1';
import { SourceMetadataV1 } from './sourceMetadataV1';

/**
 * Defines a data Source for Segment data.
 */
export class SourceAlpha {
    /**
     * The id of the Source.  Config API note: analogous to `name`.
     */
    'id': string;
    /**
     * The slug used to identify the Source in the Segment app.  Config API note: equal to `name`.
     */
    'slug': string;
    /**
     * The name of the Source.  Config API note: equal to `displayName`.
     */
    'name'?: string;
    'metadata': SourceMetadataV1;
    /**
     * The id of the Workspace that owns the Source.  Config API note: equal to `parent`.
     */
    'workspaceId': string;
    /**
     * Enable to receive data from the Source.
     */
    'enabled': boolean;
    /**
     * The write keys used to send data from the Source. This field is left empty when the current token does not have the \'source admin\' permission.
     */
    'writeKeys': Array<string>;
    /**
     * A key-value object that contains instance-specific settings for a Source.  The `options` field in the Source metadata defines the schema of this object.
     */
    'settings'?: { [key: string]: any };
    /**
     * A list of labels applied to the Source.
     */
    'labels': Array<LabelV1>;

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
            name: 'metadata',
            baseName: 'metadata',
            type: 'SourceMetadataV1',
        },
        {
            name: 'workspaceId',
            baseName: 'workspaceId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'writeKeys',
            baseName: 'writeKeys',
            type: 'Array<string>',
        },
        {
            name: 'settings',
            baseName: 'settings',
            type: '{ [key: string]: any; }',
        },
        {
            name: 'labels',
            baseName: 'labels',
            type: 'Array<LabelV1>',
        },
    ];

    static getAttributeTypeMap() {
        return SourceAlpha.attributeTypeMap;
    }
}
