/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 53.2.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Represents an Audit Trail event.
 */
export class AuditEventV1 {
    /**
     * Unique identifier for this audit trail event.
     */
    'id': string;
    /**
     * The timestamp of this event in ISO-8601 format.
     */
    'timestamp': string;
    /**
     * The type of this event.
     */
    'type': string;
    /**
     * The user or API token that triggered this event.
     */
    'actor': string;
    /**
     * The email of the user that triggered this event.
     */
    'actorEmail'?: string;
    /**
     * The identifier of the resource affected by this event.
     */
    'resourceId': string;
    /**
     * The kind of resource affected by this event.
     */
    'resourceType': string;
    /**
     * The name of the resource affected by this event.
     */
    'resourceName': string;

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
            name: 'timestamp',
            baseName: 'timestamp',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'actor',
            baseName: 'actor',
            type: 'string',
        },
        {
            name: 'actorEmail',
            baseName: 'actorEmail',
            type: 'string',
        },
        {
            name: 'resourceId',
            baseName: 'resourceId',
            type: 'string',
        },
        {
            name: 'resourceType',
            baseName: 'resourceType',
            type: 'string',
        },
        {
            name: 'resourceName',
            baseName: 'resourceName',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return AuditEventV1.attributeTypeMap;
    }
}
