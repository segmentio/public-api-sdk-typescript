/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 57.4.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * Update journey status output.
 */
export class UpdateStatusForJourneyAlphaOutput {
    /**
     * The journey container id.
     */
    'containerId': string;
    /**
     * The journey version.
     */
    'version': number;
    /**
     * The status of the journey.
     */
    'status': UpdateStatusForJourneyAlphaOutput.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'containerId',
            baseName: 'containerId',
            type: 'string',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'UpdateStatusForJourneyAlphaOutput.StatusEnum',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateStatusForJourneyAlphaOutput.attributeTypeMap;
    }
}

export namespace UpdateStatusForJourneyAlphaOutput {
    export enum StatusEnum {
        ARCHIVED = <any>'ARCHIVED',
        ENTRY_PAUSED = <any>'ENTRY_PAUSED',
        PUBLISHED = <any>'PUBLISHED',
    }
}
