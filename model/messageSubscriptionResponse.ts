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
import { MessageSubscriptionResponseError } from './messageSubscriptionResponseError';
import { UpdateGroupSubscriptionStatusResponse } from './updateGroupSubscriptionStatusResponse';

export class MessageSubscriptionResponse {
    /**
     * Key is the phone number or email.
     */
    'key': string;
    /**
     * Type is communication medium used. Either SMS, EMAIL or WHATSAPP.
     */
    'type': MessageSubscriptionResponse.TypeEnum;
    /**
     * The user subscribed, unsubscribed, or on initial status.
     */
    'status'?: MessageSubscriptionResponse.StatusEnum;
    /**
     * Error messages.
     */
    'errors'?: Array<MessageSubscriptionResponseError>;
    /**
     * Optional subscription groups.
     */
    'groups'?: Array<UpdateGroupSubscriptionStatusResponse>;

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
            type: 'MessageSubscriptionResponse.TypeEnum',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'MessageSubscriptionResponse.StatusEnum',
        },
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<MessageSubscriptionResponseError>',
        },
        {
            name: 'groups',
            baseName: 'groups',
            type: 'Array<UpdateGroupSubscriptionStatusResponse>',
        },
    ];

    static getAttributeTypeMap() {
        return MessageSubscriptionResponse.attributeTypeMap;
    }
}

export namespace MessageSubscriptionResponse {
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
