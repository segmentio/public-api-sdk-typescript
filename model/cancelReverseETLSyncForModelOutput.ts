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

/**
 * CancelReverseETLSyncForModelOutput either will return an error or a \"CANCELLING\" status.
 */
export class CancelReverseETLSyncForModelOutput {
    /**
     * The id of the Model.
     */
    'modelId': string;
    /**
     * The id of the Sync.
     */
    'syncId': string;
    /**
     * A place holder for a machine-friendly category for an error, if applicable. - \"SyncAlreadyCanceled\" - \"SyncFinishedCannotCancel\"
     */
    'errorCode'?: string;
    /**
     * A place holder for a human-readable description of the error, if applicable. - \"sync already canceled\" - \"sync already finished\".
     */
    'errorMessage'?: string;
    /**
     * If no error, status will be CANCELLING, as the extract/load might take some time to cancel.
     */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'modelId',
            baseName: 'modelId',
            type: 'string',
        },
        {
            name: 'syncId',
            baseName: 'syncId',
            type: 'string',
        },
        {
            name: 'errorCode',
            baseName: 'errorCode',
            type: 'string',
        },
        {
            name: 'errorMessage',
            baseName: 'errorMessage',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return CancelReverseETLSyncForModelOutput.attributeTypeMap;
    }
}
