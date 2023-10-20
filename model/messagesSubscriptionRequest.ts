/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 36.3.0
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GroupSubscriptionStatus } from './groupSubscriptionStatus';

export class MessagesSubscriptionRequest {
    /**
     * Key is the phone number or email.
     */
    'key': string;
    /**
     * Type is communication medium used.
     */
    'type': MessagesSubscriptionRequest.TypeEnum;
    /**
     * The user subscribed, unsubscribed, or on initial status globally.
     */
    'status'?: MessagesSubscriptionRequest.StatusEnum;
    /**
     * Optional groups subscription status.
     */
    'groups'?: Array<GroupSubscriptionStatus>;

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
            name: 'type',
            baseName: 'type',
            type: 'MessagesSubscriptionRequest.TypeEnum',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'MessagesSubscriptionRequest.StatusEnum',
        },
        {
            name: 'groups',
            baseName: 'groups',
            type: 'Array<GroupSubscriptionStatus>',
        },
    ];

    static getAttributeTypeMap() {
        return MessagesSubscriptionRequest.attributeTypeMap;
    }
}

export namespace MessagesSubscriptionRequest {
    export enum TypeEnum {
        ANDROID_PUSH = <any>'ANDROID_PUSH',
        EMAIL = <any>'EMAIL',
        IOS_PUSH = <any>'IOS_PUSH',
        SMS = <any>'SMS',
        WHATSAPP = <any>'WHATSAPP',
    }
    export enum StatusEnum {
        DID_NOT_SUBSCRIBE = <any>'DID_NOT_SUBSCRIBE',
        SUBSCRIBED = <any>'SUBSCRIBED',
        UNSUBSCRIBED = <any>'UNSUBSCRIBED',
    }
}
