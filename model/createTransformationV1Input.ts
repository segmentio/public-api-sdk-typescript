/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 34.4.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { FQLDefinedPropertyV1 } from './fQLDefinedPropertyV1';
import { PropertyRenameV1 } from './propertyRenameV1';
import { PropertyValueTransformationV1 } from './propertyValueTransformationV1';

/**
 * The input to create a Transformation.
 */
export class CreateTransformationV1Input {
    /**
     * The name of the Transformation.
     */
    'name': string;
    /**
     * The Source to be associated with the Transformation.
     */
    'sourceId': string;
    /**
     * The optional Destination metadata id to be associated with the Transformation.
     */
    'destinationMetadataId'?: string;
    /**
     * If the Transformation should be enabled.
     */
    'enabled': boolean;
    /**
     * If statement ([FQL](https://segment.com/docs/config-api/fql/)) to match events.  For standard event matchers, use the following:   Track -\\> \"event=\'\\<eventName\\>\'\"   Identify -\\> \"type=\'identify\'\"   Group -\\> \"type=\'group\'\"
     */
    'if': string;
    /**
     * Optional new event name for renaming events. Works only for \'track\' event type.
     */
    'newEventName'?: string;
    /**
     * Optional array for renaming properties collected by your events.
     */
    'propertyRenames'?: Array<PropertyRenameV1>;
    /**
     * Optional array for transforming properties and values collected by your events. Limited to 10 properties.
     */
    'propertyValueTransformations'?: Array<PropertyValueTransformationV1>;
    /**
     * Optional array for defining new properties in [FQL](https://segment.com/docs/config-api/fql/). Currently limited to 1 property.
     */
    'fqlDefinedProperties'?: Array<FQLDefinedPropertyV1>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
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
            type: 'Array<PropertyRenameV1>',
        },
        {
            name: 'propertyValueTransformations',
            baseName: 'propertyValueTransformations',
            type: 'Array<PropertyValueTransformationV1>',
        },
        {
            name: 'fqlDefinedProperties',
            baseName: 'fqlDefinedProperties',
            type: 'Array<FQLDefinedPropertyV1>',
        },
    ];

    static getAttributeTypeMap() {
        return CreateTransformationV1Input.attributeTypeMap;
    }
}
