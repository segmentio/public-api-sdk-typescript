"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMessagingSubscriptionFailureResponse = void 0;
var GetMessagingSubscriptionFailureResponse = (function () {
    function GetMessagingSubscriptionFailureResponse() {
    }
    GetMessagingSubscriptionFailureResponse.getAttributeTypeMap = function () {
        return GetMessagingSubscriptionFailureResponse.attributeTypeMap;
    };
    GetMessagingSubscriptionFailureResponse.discriminator = undefined;
    GetMessagingSubscriptionFailureResponse.attributeTypeMap = [
        {
            name: 'key',
            baseName: 'key',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'errors',
            baseName: 'errors',
            type: 'Array<MessageSubscriptionResponseError>',
        },
    ];
    return GetMessagingSubscriptionFailureResponse;
}());
exports.GetMessagingSubscriptionFailureResponse = GetMessagingSubscriptionFailureResponse;
//# sourceMappingURL=getMessagingSubscriptionFailureResponse.js.map