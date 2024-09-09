/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 54.1.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
 * A label lets Workspace owners assign permissions to users, and grant these users access to groups.  A Workspace owner may use labels to grant users access to groups of resources.  When you add a label to a Source or Personas Spaces, any users granted access to that label gain access to those resources.  All Workspaces include labels for Dev (development) and Prod (production) environments. On top of those, Free and Team plan customers may create up to five labels.  Customers with the Enterprise pricing package may create an unlimited number of labels.
 */
export class LabelV1 {
    /**
     * The key that represents the name of this label.
     */
    'key': string;
    /**
     * The value associated with the key of this label.
     */
    'value': string;
    /**
     * An optional description of the purpose of this label.
     */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'value',
            baseName: 'value',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return LabelV1.attributeTypeMap;
    }
}
