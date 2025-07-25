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
import { PropertyRenameBeta } from './propertyRenameBeta';
import { PropertyValueTransformationBeta } from './propertyValueTransformationBeta';

/**
 * The input to update a Transformation.
 */
export class UpdateTransformationBetaInput {
    /**
     * ID of the Transformation to update.
     */
    'transformationId': string;
    /**
     * The name of the Transformation.
     */
    'name'?: string;
    /**
     * The optional Source to be associated with the Transformation.
     */
    'sourceId'?: string;
    /**
     * The optional Destination metadata to be associated with the Transformation.
     */
    'destinationMetadataId'?: string;
    /**
     * If the Transformation should be enabled.
     */
    'enabled'?: boolean;
    /**
     * If statement ([FQL](https://segment.com/docs/config-api/fql/)) to match events.  For standard event matchers, use the following:  Track -\\> \"event=\'\\<eventName\\>\'\"  Identify -\\> \"type=\'identify\'\"  Group -\\> \"type=\'group\'\"
     */
    'if'?: string;
    /**
     * Optional new event name for renaming events. Works only for \'track\' event type.
     */
    'newEventName'?: string;
    /**
     * Optional array for renaming properties collected by your events.
     */
    'propertyRenames'?: Array<PropertyRenameBeta>;
    /**
     * Optional array for transforming properties and values collected by your events. Limited to 10 properties.
     */
    'propertyValueTransformations'?: Array<PropertyValueTransformationBeta>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'transformationId',
            baseName: 'transformationId',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'sourceId',
            baseName: 'sourceId',
            type: 'string',
        },
        {
            name: 'destinationMetadataId',
            baseName: 'destinationMetadataId',
            type: 'string',
        },
        {
            name: 'enabled',
            baseName: 'enabled',
            type: 'boolean',
        },
        {
            name: 'if',
            baseName: 'if',
            type: 'string',
        },
        {
            name: 'newEventName',
            baseName: 'newEventName',
            type: 'string',
        },
        {
            name: 'propertyRenames',
            baseName: 'propertyRenames',
            type: 'Array<PropertyRenameBeta>',
        },
        {
            name: 'propertyValueTransformations',
            baseName: 'propertyValueTransformations',
            type: 'Array<PropertyValueTransformationBeta>',
        },
    ];

    static getAttributeTypeMap() {
        return UpdateTransformationBetaInput.attributeTypeMap;
    }
}
